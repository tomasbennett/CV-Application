export type ICVHeader = "Top" | "Left" | "Right";

export type IFontOptions = "Times" | "Arial" | "Monospace";


type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;



export type IColourOptions = RGB | RGBA | HEX;

export type ILayoutData = {
    cvHeader: ICVHeader;
    font: IFontOptions;
    headerColour: IColourOptions;
}

//NEED TO COMBINE INTO A SELECTABLEFORM WITH FUNCTIONALITY