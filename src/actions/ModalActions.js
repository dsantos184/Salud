export const exibeModal = (isOpen) =>
{
    return {
        type: "exibeModal",
        payload:{isOpen}
    }
}