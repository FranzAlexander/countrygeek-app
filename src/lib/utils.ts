// This function will replace whitespaces with hyphens and encode the URI
export function encodeURIHyphen(urlString: string) {
	return encodeURIComponent(urlString.replace(/\s+/g, '-'));
}
