import { toRomaji, bind } from 'wanakana';

const codeStart = 0x3041
const codeEnd = 0x3097

const letterTableElement = getElem<HTMLTableElement>('letter-table');
const guessesTableElement = getElem<HTMLTableElement>('guesses-table');
const textInputElement = getElem<HTMLInputElement>('text-input');
const checkButtonElement = getElem<HTMLButtonElement>('check-button');
const statusDivElement = getElem<HTMLDivElement>('status-div');
const wordsSet : Set<string> = new Set (require('../resources/dict.json'));
let guesses : string[] = [];

enum SymbolStatus {
    Unknown = 0,
    Missing,
    Present,
    Placed,
  }

let symbolStatus : {[key: string] : SymbolStatus} = {};

function generateRandomWord () {
    const words = Array.from(wordsSet)
    return words[Math.floor(Math.random()*words.length)]
}

const secretWord = generateRandomWord ()

function throwExpression(errorMessage: string): never {
    throw new Error(errorMessage);
}

function getElem<Type>(name: string) {
    return (document.querySelector(`#${name}`) as Type | null) || throwExpression(`#${name} not found`);
}

function isSmall (c : string) {
  return c == 'っ' || c == 'ゃ' || c == 'ゅ' || c == 'ょ';
}

function isExcluded (c : string) {
    return c == 'ゐ' || c == 'ゑ' || c == 'ゔ' || c == 'ぁ' || c == 'ぃ' || c == 'ぅ'  || c == 'ぇ' || c == 'ぉ' || c == 'ゎ';
  }

const letterCount = 4
const rowCount = 6

function addSymbol (rowElement: HTMLTableRowElement, symbol: string) {
    const cellElement = rowElement.insertCell()
    cellElement.classList.add ('kana-cell')
    switch (symbolStatus[symbol]) {
        case SymbolStatus.Missing:
            cellElement.classList.add ('cell-missing');
            break;
        case SymbolStatus.Placed:
            cellElement.classList.add ('cell-placed');
            break;
        case SymbolStatus.Present:
            cellElement.classList.add ('cell-present');
            break;
        case SymbolStatus.Unknown:
        case undefined:
            cellElement.classList.add ('cell-unknown');
            break;
    }
    cellElement.innerText = symbol
    cellElement.addEventListener('click', function () {
        if (textInputElement.value.length >= letterCount || textInputElement.disabled)
            return
    textInputElement.value += symbol });
}

function fillTableRow (rowElement: HTMLTableRowElement, rowNum : number) {
    if (rowNum == rowCount - 1) {
        addSymbol (rowElement, 'や')
        addSymbol (rowElement, 'ゆ')
        addSymbol (rowElement, 'よ')
        addSymbol (rowElement, 'わ')
        addSymbol (rowElement, 'ん')
        addSymbol (rowElement, 'を')
        addSymbol (rowElement, 'っ')
        addSymbol (rowElement, 'ゃ')
        addSymbol (rowElement, 'ゅ')
        addSymbol (rowElement, 'ょ')
        addSymbol (rowElement, 'ー')
        return
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
            addSymbol (rowElement, symbol)
        }
        ++num;
    }    
}  

function refillLetterTable () {
    letterTableElement.innerHTML = ''
    for (let rowNum = 0; rowNum < rowCount; ++rowNum) {
        const rowElement = letterTableElement.insertRow();
        fillTableRow (rowElement, rowNum);
    }
}

function raiseStatus (symbol : string, newStatus : SymbolStatus) {
    const curStatus = symbolStatus[symbol]
    console.log (curStatus)
    if (curStatus == undefined || curStatus < newStatus)
        symbolStatus[symbol] = newStatus;
}

function parseLastGuess () {
    const lastGuess = guesses[guesses.length - 1]
    for (let i = 0; i < lastGuess.length; ++i) {
        const symbol = lastGuess[i]
        if (secretWord[i] == symbol) {
            raiseStatus (symbol, SymbolStatus.Placed)
        }
        else if (secretWord.search (symbol) != -1) {
            raiseStatus (symbol, SymbolStatus.Present)
        }
        else {
            raiseStatus (symbol, SymbolStatus.Missing)
        }
    }
}

function refillGuessesTable () {
    guessesTableElement.innerHTML = ''
    for (let i = 0; i < guesses.length; ++i) {
        const rowElement = guessesTableElement.insertRow();
        for (let j = 0; j < guesses[i].length; ++j) {
            const cellElement = rowElement.insertCell()
            const symbol = guesses[i][j]
            cellElement.classList.add ('kana-cell')
            if (secretWord[j] == symbol) {
                cellElement.classList.add ('cell-placed')
            }
            else if (secretWord.search (symbol) != -1) {
                cellElement.classList.add ('cell-present')
            }
            else {
                cellElement.classList.add ('cell-missing')
            }
            cellElement.innerText = symbol;
        }
    }
}

function doCheck () {
  statusDivElement.textContent = ''
  const value = textInputElement.value
  if (value.length != letterCount) {
      statusDivElement.textContent = 'Expected number of characters is ' + letterCount.toString()
      return;
  }
  if (!(wordsSet.has (value))) {
      textInputElement.value = ''
      statusDivElement.textContent = 'Word not found in dictionary'
      return;
  }
  if (value == secretWord) {
      statusDivElement.textContent = 'Victory!'
      textInputElement.disabled = true;
  } else
    textInputElement.value = ''
  guesses.push(value)
  parseLastGuess()
  refillGuessesTable ()
  refillLetterTable () 
}

checkButtonElement.addEventListener('click', doCheck);
textInputElement.addEventListener("keyup", ({key}) => {
    if (key === "Enter") {
        doCheck ();
    }
})
refillLetterTable()
bind (textInputElement)
textInputElement.focus()
