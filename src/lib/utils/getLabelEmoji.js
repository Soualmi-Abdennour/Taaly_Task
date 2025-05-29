export const getLabelEmoji=(label,correspondList)=>{
    return correspondList.find((l) => l.label === label)?.emoji;
}