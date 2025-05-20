import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@components/ui/select";
import { getListLanguages } from "@lib/utils";

export default function InputLanguage({ langId, onChange = () => {} }) {
    const languages = getListLanguages();

    return (
        <Select onValueChange={onChange} value={langId}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Chọn ngôn ngữ" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Chọn ngôn ngữ</SelectLabel>
                    {languages.map((lang, index) => (
                        <SelectItem
                            value={lang.key}
                            key={index}
                        >
                            {lang.text}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
