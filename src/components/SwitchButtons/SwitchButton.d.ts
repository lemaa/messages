
export interface IProps {
    buttonType: "checkbox"|"radio";
    nameIdentifier: string;
    options: { value: string | number; text: string; }[];
    value: string | number;
    onChange: (event: any) => void;
}