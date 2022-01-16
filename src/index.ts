import { toRomaji, bind } from 'wanakana';

const codeStart = 0x3041
const codeEnd = 0x3097

const letterTableElement = getElem<HTMLTableElement>('letter-table');
const guessesTableElement = getElem<HTMLTableElement>('guesses-table');
const textInputElement = getElem<HTMLInputElement>('text-input');
const checkButtonElement = getElem<HTMLButtonElement>('check-button');
const giveUpButtonElement = getElem<HTMLButtonElement>('give-up-button');
const restartButtonElement = getElem<HTMLButtonElement>('restart-button');
const statusDivElement = getElem<HTMLDivElement>('status-div');
const guessDivElement = getElem<HTMLSpanElement>('guess-span');
const wordsSet : Set<string> = new Set (require('../resources/dict.json'));
let guesses : string[] = [];

enum SymbolStatus {
    Unknown = 0,
    Missing,
    Present,
    Placed,
  }

let symbolStatus : {[key: string] : SymbolStatus} = {};

function generateRandomWord() {
    const words = Array.from(wordsSet)
    return words[Math.floor(Math.random()*words.length)]
}

let secretWord = ''

function throwExpression(errorMessage: string): never {
    throw new Error(errorMessage);
}

function getElem<Type>(name: string) {
    return (document.querySelector(`#${name}`) as Type | null) || throwExpression(`#${name} not found`);
}

function isSmall (c : string) {
  return c == 'っ' || c == 'ゃ' || c == 'ゅ' || c == 'ょ';
}

const conv = [['っ', 'つ'], ['ゃ', 'や'], ['ゅ', 'ゆ'], ['ょ', 'よ']];

function toLarge (c : string) {
  for (const p of conv) {
    if (c == p[1])
      return p[0];
  }
  return c
}

function toSmall (c : string) {
    for (const p of conv) {
      if (c == p[0])
        return p[1];
    }
    return c
  }

function isExcluded (c : string) {
    return c == 'ゐ' || c == 'ゑ' || c == 'ゔ' || c == 'ぁ' || c == 'ぃ' || c == 'ぅ'  || c == 'ぇ' || c == 'ぉ' || c == 'ゎ';
  }

const letterCount = 4
const rowCount = 6
guessDivElement.innerText = 'Guess ' + letterCount + '-character word:'

function statusToClassName (status : SymbolStatus) {
    switch (status) {
        case SymbolStatus.Missing:
            return 'cell-missing';
        case SymbolStatus.Placed:
            return 'cell-placed';
        case SymbolStatus.Present:
            return 'cell-present';
        case SymbolStatus.Unknown:
        default:
            return 'cell-unknown';
    }
}

function addSymbolElement (rowElement: HTMLTableRowElement, symbol: string) {
    const cellElement = rowElement.insertCell()
    cellElement.classList.add ('kana-cell')
    cellElement.classList.add (statusToClassName (symbolStatus[toLarge (symbol)]))
    if (textInputElement.value.search (symbol) != -1) {
        cellElement.classList.add ('cell-highlight')
    }
    cellElement.innerText = symbol
    cellElement.addEventListener('click', function() {
        if (textInputElement.disabled)
            return
        textInputElement.value += symbol
        onInputChange()
        textInputElement.focus()
    });
}

function fillTableRow (rowElement: HTMLTableRowElement, rowNum : number) {
    if (rowNum == rowCount - 1) {
        return fillLastRow(rowElement);
    }
    let num = 0
    let arr = ['a', 'i', 'u', 'e', 'o']
    for (let code = codeStart; code < codeEnd; ++code) {
        const symbol = String.fromCharCode(code)
        if (isExcluded (symbol))
            continue

        const romaji = toRomaji(symbol)
        let lastRomaji = romaji[romaji.length - 1]

        if (lastRomaji == arr[rowNum] && romaji[0] != 'w' && romaji[0] != 'y') {
            addSymbolElement (rowElement, symbol)
        }
        ++num;
    }
}

function fillLastRow(rowElement: HTMLTableRowElement) {
    for (const symbol of ['や', 'ゆ', 'よ', 'わ', 'ん', 'を', 'っ', 'ゃ', 'ゅ', 'ょ', 'ー'])
      addSymbolElement(rowElement, symbol);
    addBackSpace(rowElement);
    addEnter (rowElement);
    return;
}

function addBackSpace(rowElement: HTMLTableRowElement) {
    const cellElement = rowElement.insertCell();
    cellElement.innerText = '⌫';
    cellElement.addEventListener('click', function() {
        if (textInputElement.disabled)
            return;
        textInputElement.value = textInputElement.value.slice(0, -1);
        onInputChange()
    });
}

function addEnter(rowElement: HTMLTableRowElement) {
    const cellElement = rowElement.insertCell();
    cellElement.innerText = '⏎';
    cellElement.addEventListener('click', function() {
        if (checkButtonElement.disabled)
          return;
        doCheck();
    });
}

function refillLetterTable() {
    letterTableElement.innerHTML = ''
    for (let rowNum = 0; rowNum < rowCount; ++rowNum) {
        const rowElement = letterTableElement.insertRow();
        fillTableRow (rowElement, rowNum);
    }
}

function raiseStatus (symbol : string, newStatus : SymbolStatus) {
    const curStatus = symbolStatus[toLarge(symbol)]
    if (curStatus == undefined || curStatus < newStatus)
        symbolStatus[toLarge (symbol)] = newStatus;
}

function getStatus(pos: number, symbol : string) {
        if (toLarge (secretWord[pos]) == toLarge (symbol))
            return SymbolStatus.Placed;

        if (secretWord.search (toSmall (symbol)) != -1 || secretWord.search (toLarge (symbol)) != -1)
            return SymbolStatus.Present;

        return SymbolStatus.Missing;
}

function parseLastGuess() {
    const lastGuess = guesses[guesses.length - 1]
    for (let i = 0; i < lastGuess.length; ++i) {
        const symbol = lastGuess[i]
        raiseStatus (symbol, getStatus (i, symbol));
    }
}

function refillGuessesTable() {
    guessesTableElement.innerHTML = ''
    for (let i = 0; i < guesses.length; ++i) {
        const rowElement = guessesTableElement.insertRow();
        for (let j = 0; j < guesses[i].length; ++j) {
            const symbol = guesses[i][j]
            const status = getStatus(j, symbol)
            const cellElement = rowElement.insertCell()
            cellElement.classList.add (statusToClassName(status))
            cellElement.innerText = symbol;
        }
    }
}

function setGameEnabled(enabled: boolean) {
    textInputElement.disabled = !enabled;
    checkButtonElement.disabled = !enabled;
    giveUpButtonElement.disabled = !enabled;
}

function doCheck() {
  statusDivElement.textContent = ''
  const value = textInputElement.value
  if (value.length != letterCount) {
      statusDivElement.textContent = 'Expected number of characters is ' + letterCount.toString()
      return;
  }
  if (!(wordsSet.has (value))) {
      textInputElement.value = ''
      refillLetterTable()
      statusDivElement.textContent = 'Word not found in dictionary'
      return;
  }
  guesses.push(value)
  parseLastGuess()

  if (value == secretWord) {
    statusDivElement.textContent = 'Victory (in ' + guesses.length.toString() + ' guesses)!'
    setGameEnabled(false)
  } else {
    textInputElement.value = ''
  }

  refillGuessesTable()
  refillLetterTable()
  textInputElement.focus()
}

function doGiveUp() {
    setGameEnabled(false)
    statusDivElement.innerHTML = 'Loss... Correct word was <a target="_blank" href=https://jisho.org/search/"' + secretWord + '">' + secretWord + '</a>'
}

function doRestart() {
    setGameEnabled(true)
    textInputElement.value = '';
    statusDivElement.innerHTML = ''
    secretWord = generateRandomWord()
    guesses = []
    symbolStatus = {}
    refillGuessesTable()
    refillLetterTable()
    textInputElement.focus()
}

function onInputChange() {
    statusDivElement.innerText = ''
    refillLetterTable()
}

checkButtonElement.addEventListener('click', doCheck);
giveUpButtonElement.addEventListener('click', doGiveUp);
restartButtonElement.addEventListener('click', doRestart);
textInputElement.addEventListener("keyup", ({key}) => {
    if (key === "Enter") {
        doCheck();
    } else {
        onInputChange();
    }
})
refillLetterTable()
bind (textInputElement)
doRestart()
