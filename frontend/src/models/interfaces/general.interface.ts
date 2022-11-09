export interface Children {
    children: JSX.Element[] | JSX.Element;
}

export interface CardProps {
    img: string;
    title:string;
    max?:string|number;
    min?:string|number;
    handle?: React.MouseEventHandler<HTMLDivElement>;
  }
export interface HtmlElement {
    className?: string;
    children: React.ReactNode;
}
export interface HtmlForm {
    className?: string;
    children:  Children
}
