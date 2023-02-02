import styled from "styled-components";
import { BsCheck } from "react-icons/all";

export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 700px;
    text-align: start;
    margin: 10px;
    border-radius: 5px;
    background: #111111;
`;

export const BlogImageSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
`;

export const EditBlogSection = styled.div`
    display: flex;
    justify-content: end;
`;
export const BlogImage = styled.img`
    width: 100%;
    max-width: 300px;
`;
export const MainSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: 600px) {
    }
`;
export const SubSection = styled.div`
    padding: 25px 25px 15px 25px;
    width: 100%;
    @media screen and (max-width: 600px) {
        padding: 10px 10px 15px 15px;
    }
`;

export const DetailsSection = styled.div`
    display: flex;
    flex-direction: column;
    text-align: start;
    max-width: 300px;
    width: 100%;
`;

export const HeaderDetailsSection = styled.div`
    padding: 25px 0 0 25px;
    text-align: start;
`;

export const FooterDetailsSection = styled.div`
    display: flex;
    align-items: end;
    justify-content: space-between;
    padding: 5px 5px 5px 0;
`;

export const Title = styled.h3`
    @media screen and (max-width: 600px) {
        font-size: 12px;
    }
`;

export const Description = styled.p`
    @media screen and (max-width: 600px) {
        font-size: 8px;
        //display: none;
    }
`;
export const Username = styled.p``;
export const Date = styled.p`
    font-size: 10px;
    margin: 0 5px 0 0;
`;
export const Categories = styled.p`
    margin-left: 25px;
    display: flex;
    @media screen and (max-width: 600px) {
        margin-left: 15px;
    }
`;
export const Category = styled.p`
    background: #142638;
    padding: 0 5px;
    margin: 5px 5px 5px 0;
    border-radius: 2px;
    cursor: pointer;
    font-size: 13px;
    transition: transform 0.3s;

    &:hover {
        transform: scale(1.02);
    }
    @media screen and (max-width: 600px) {
        font-size: 9px;
    }
`;

export const Views = styled.p`
    font-size: 13px;
    width: 75px;
`;
export const Answers = styled.p`
    font-size: 13px;
    text-align: start;
    display: flex;
    width: 95px;
    border-radius: 2px;
    border: #101010 1px solid;
    background-color: ${(props) => (props.answerAccepted ? "rgba(173,255,47,0.6)" : "")};
`;
export const CheckIcon = styled(BsCheck)`
    font-size: 20px;
`;
export const Votes = styled.p`
    font-size: 13px;
`;
