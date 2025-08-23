import CustomTab from "@/app/components/tab/CustomTab";

export default function TabDemo(){
    const headers = [
        'Page 1',
        'Page 2',
        'Page 3',
    ]
    return(<CustomTab headers={headers}>
        <div> Page 1</div>
        <div> Page 2</div>
        <div> Page 3</div>
    </CustomTab>);
}