
export interface IProps {
    buttonType: "button" | "submit" | "reset" | undefined;
    classIdentifier: string;
    children: React.ReactNode;
    onClick?: (event: any) => void;
}