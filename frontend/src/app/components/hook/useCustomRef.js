export default function useCustomRef(value) {
    let ref = {
        current: value,
    }
    return ref;
}