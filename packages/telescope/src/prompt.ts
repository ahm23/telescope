import { filter } from 'fuzzy';
import { prompt as inquirerer, type InquirerQuestion } from 'inquirerer';

export const getFuzzySearch = (list: string[]) => {
  return (_answers: unknown, input?: string) => {
    input = input || '';
    return new Promise(function (resolve) {
      setTimeout(function () {
        const fuzzyResult = filter(input, list);
        resolve(
          fuzzyResult.map(function (el) {
            return el.original;
          })
        );
      }, 25);
    });
  };
};

interface NameValueItem {
  name: string;
  value: unknown;
}

interface Question extends InquirerQuestion {
  type?: string;
  choices?: string[] | NameValueItem[];
  source?: unknown;
}

export const getFuzzySearchNames = (nameValueItemList: NameValueItem[]) => {
  const list = nameValueItemList.map(({ name }) => name);
  return (_answers: unknown, input?: string) => {
    input = input || '';
    return new Promise(function (resolve) {
      setTimeout(function () {
        const fuzzyResult = filter(input, list);
        resolve(
          fuzzyResult.map(function (el) {
            return nameValueItemList.find(({ name }) => el.original == name);
          })
        );
      }, 25);
    });
  };
};

const transform = (questions: Question[]) => {
  return questions.map((q) => {
    if (q.type === 'fuzzy') {
      const choices = q.choices;
      delete q.choices;
      return {
        ...q,
        type: 'autocomplete',
        source: getFuzzySearch(choices as string[]),
      };
    } else if (q.type === 'fuzzy:objects') {
      const choices = q.choices;
      delete q.choices;
      return {
        ...q,
        type: 'autocomplete',
        source: getFuzzySearchNames(choices as NameValueItem[]),
      };
    } else {
      return q;
    }
  });
};

export const prompt = async (
  questions: Question[] = [],
  argv: unknown = {}
) => {
  const transformed = transform(questions);
  return await inquirerer(transformed, argv);
};
