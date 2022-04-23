const addEllipsis = (text: string) => (text.length > 20 ? `${text.slice(0, 20)}...` : text);

export default addEllipsis;