from jamdict import Jamdict
import re
import json
import jaconv

jam = Jamdict()
word_length = 4
word_pattern = '_' * word_length
result = jam.lookup (word_pattern)

words = set()
for entry in result.entries:
	for kana_form in entry.kana_forms:
		common_tags = ["news1", "ichi1", "spec1", "spec2", "gai1"]
		is_good = False
		for tag in common_tags:
			if tag in kana_form.pri:
				is_good = True
				break
		if not is_good:
			continue
		kana_str = str (kana_form)
		if not len (kana_str) == word_length:
			continue
		kana = jaconv.kata2hira (kana_str)
		words.add (kana)

with open('dict.json', 'w') as fp:
	json.dump(list(words), fp)
