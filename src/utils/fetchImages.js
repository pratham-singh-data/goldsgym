import BackImage from "../assets/bodypart/back.png";
import HeartImage from "../assets/bodypart/heart.png"
import ChestImage from "../assets/bodypart/chest.png"
import NeckImage from "../assets/bodypart/neck.png"
import ShoulderImage from "../assets/bodypart/shoulders.png"
import WaistImage from "../assets/bodypart/waist.png"
import UpperArmImage from "../assets/bodypart/biceps.png"
import UpperLegImage from "../assets/bodypart/thigh.png"
import LowerArmImage from "../assets/bodypart/arm.png"
import LowerLegImage from "../assets/bodypart/leg.png"
import DefaultGymImage from "../assets/icons/gym.png"

export const imageGetter = [
    {
        name: "Pixel Perfect",
        linkToCreator: "https://www.flaticon.com/authors/pixel-perfect",
        image: BackImage
    },
    {
        name: "Freepik",
        linkToCreator: "https://www.freepik.com/",
        image: HeartImage
    },
    {
        name: "Rabit Jes",
        linkToCreator: "https://www.flaticon.com/authors/rabit-jes",
        image: ChestImage
    },
    {
        name: "Good Ware",
        linkToCreator: "https://www.flaticon.com/authors/good-ware",
        image: NeckImage
    },
    {
        name: "Iconixar",
        linkToCreator: "https://www.flaticon.com/authors/iconixar",
        image: ShoulderImage
    },
    {
        name: "Abdul-Aziz",
        linkToCreator: "https://www.flaticon.com/authors/abdul-aziz",
        image: WaistImage
    },
    {
        name: "Mayor Icons",
        linkToCreator: "https://www.flaticon.com/authors/mayor-icons",
        image: UpperArmImage
    },
    {
        name: "Freepik",
        linkToCreator: "https://www.freepik.com/",
        image: UpperLegImage
    },
    {
        name: "Freepik",
        linkToCreator: "https://www.freepik.com/",
        image: LowerArmImage
    },
    {
        name: "Vitaly Gorbachev",
        linkToCreator: "https://www.flaticon.com/authors/vitaly-gorbachev",
        image: LowerLegImage
    }
]

export const fetchImage = (name) => {
    switch(name){
        case "back": return BackImage;
        case "cardio": return HeartImage;
        case "chest": return ChestImage;
        case "neck": return NeckImage;
        case "shoulders": return ShoulderImage;
        case "waist": return WaistImage;
        case "upper arms": return UpperArmImage;
        case "upper legs": return UpperLegImage;
        case "lower arms": return LowerArmImage;
        case "lower legs": return LowerLegImage;
        default: return DefaultGymImage;
    }
}