export function removeTags(str: any) {
	if ((str===null) || (str===''))
			return false;
	else
			str = str.toString()
			.split(" ")
			.splice(0, 5).join(" ");
				
	// Regular expression to identify HTML tags in
	// the input string. Replacing the identified
	// HTML tag with a null string.
	return str.replace( /(<([^>]+)>)/ig, '');
}


export function longDate(str: any) {
  const dateOptions: Intl.DateTimeFormatOptions = {
    timeZone: "UTC",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(str).toLocaleDateString("en-GB", dateOptions);
}