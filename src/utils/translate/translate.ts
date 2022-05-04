import getContent from "@src/content";

const dictionary = getContent('dictionaryContent');

const translate = (text: string) => dictionary[text as keyof typeof dictionary];

export default translate;