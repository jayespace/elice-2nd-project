import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Nav from '../../components/Nav/index';
import Resign from '../../components/Resign/Resign';
import * as Api from '../../api';

function Profile() {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({});
    const [certifyInfo, setCertifyInfo] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [BMI, setBMI] = useState(0);
    const [RDI, setRDI] = useState(0);
    const {
        id,
        name,
        height,
        weight,
        age,
        gender,
        goal,
        activeLevel
    } = userInfo;

    const calBMI = () => {
        setBMI(((weight / height ** 2) * 10000).toFixed(2));
    };
    
    const calRDI = () => {
        let BMR = 0;
        if (gender === 'M')
            BMR = 655 + ((9.6 * weight) + (1.8 * height)) - (4.7 * age);
        else if (gender === 'W')
            BMR = 66 + ((13.7 * weight) + (5 * height)) - (6.5 * age);
        
        switch (activeLevel) {
            case 1:
                setRDI(BMR * 1.2);
                break;
            case 2:
                setRDI(BMR * 1.3);
                break;
            case 3:
                setRDI(BMR * 1.5);
                break;
            case 4:
                setRDI(BMR * 1.7);
                break;
            default:
                setRDI(BMR * 1.2);
                break;
        }
    };

    const getInfo = async () => {
        const { data } = await Api.get('/users/getUser');
        
        setUserInfo(data);
    };

    const getCertify = async () => {
        const { data }  = await Api.get('/users/getExpertInfo');

        setCertifyInfo(data.payload.certificate[0].name);
    };

    useEffect(() => {
        getInfo();
    }, []);

    useEffect(() => {
        calBMI();
        calRDI();
    }, [height || weight || age]);

    const handleGoToCertify = (e) => {
        e.preventDefault();
        navigate('/certify', { replace: true });
    };

    const handleUpdateButton = (e) => {
        e.preventDefault();

        navigate('/profile/update', { replace: true });
    };

    const handleResignButton = (e) => {
        e.preventDefault();

        setShowPopup(!showPopup);
    };

    return (
        <>
            <Nav />
            <Container>
                <Title>????????????</Title>
                <ProfileContainer>
                    <BoxContainer>
                        <TitleText>?????? ???????????? <span style={{color: '#999999'}}>??????</span></TitleText>
                        <InputForm>
                            <InputText>?????????</InputText>
                            <InputItem value={id || ''} disabled />
                            <InputText>????????????</InputText>
                            <InputItem value='******' disabled />
                            <InputText>??????</InputText>
                            <InputItem value={name || ''} disabled />
                        </InputForm>
                    </BoxContainer>
                    <BoxContainer>
                        <TitleText>?????? ???????????? <span style={{ color: '#999999' }}>??????</span></TitleText>
                        <InputForm>
                            <InputText>???(cm)</InputText>
                            <InputItem value={height || ''} disabled />
                            <InputText>?????????(kg)</InputText>
                            <InputItem value={weight || ''} disabled />
                            <InputText>??????</InputText>
                            <InputItem value={age || ''} disabled />
                            <InputText>??????</InputText>
                            <SelectGender>
                                <RadioButton type="radio" checked={gender === 'M'} readOnly />
                                <div>??????</div>
                                <RadioButton type="radio" checked={gender === 'W'} readOnly />
                                <div>??????</div>
                            </SelectGender>
                            <InputText>BMI(???/???)</InputText>
                            <InputItem value={BMI} disabled />
                            <InputText>???????????? ??????</InputText>
                            <SelectBox value={goal || ''} disabled >
                                <option value="1">?????? ??????</option>
                                <option value="2">?????? ?????? ????????????</option>
                                <option value="3">?????? ??????</option>
                            </SelectBox>
                            <InputText>?????? ??????</InputText>
                            <SelectBox value={activeLevel || ''} disabled >
                                <option value="1">?????? ???????????? ??????</option>
                                <option value="2">????????? ??????(??? 1~3???)</option>
                                <option value="3">????????? ??????(??? 3~5???)</option>
                                <option value="4">????????? ??????(??? 6~7???)</option>
                            </SelectBox>
                            <InputText>RDI(kcal)  <span style={{color: "#999999"}}>*?????????????????????</span></InputText>
                            {
                                calRDI && <InputItem
                                value={RDI}
                                disabled
                                />
                            }
                            {
                                userInfo.role === 'expert'
                                    ? (
                                        <>
                                            <InputText>????????? ??????</InputText>
                                            <InputItem color='#51CF66' placeholder='???????????? ??????????????????.' disabled />
                                        </>
                                    )
                                    : (
                                        <>
                                            <InputText>????????? ??????</InputText>
                                            <InputItem style={{ marginLeft: '-40px' }} color='#FD7E14' placeholder='???????????? ?????? ??????????????????.' disabled />
                                            <GotoCertify onClick={handleGoToCertify}>????????????</GotoCertify>
                                        </>
                                    )
                            }
                            {
                                userInfo.role === 'expert'
                                    ? getCertify() && (
                                        <>
                                            <InputText>?????? ??? ????????????</InputText>
                                            <InputItem value={certifyInfo} disabled />
                                        </>
                                    )
                                    : null
                            }
                        </InputForm>
                    </BoxContainer>
                </ProfileContainer>
                <Buttons>
                    <UpdateButton onClick={handleUpdateButton}>???????????? ??????</UpdateButton>
                    <ResignButton onClick={handleResignButton}>????????????</ResignButton>
                    {
                        showPopup ? <Resign onClose={() => setShowPopup(!showPopup)} /> : null
                    }
                </Buttons>
            </Container>
        </>
    );
}

const Container = styled.div`
    position: absolute;
    display: flex;
    margin: 0 auto;
    padding: 0;
    background-color: #EFEFEF;
    
    width: 100%;
    height: 150%;

    flex-direction: column;
`;

const ProfileContainer = styled.div`
    margin: 0 auto;
    margin-bottom: 50px;
    background-color: white;
    width: 80%;
    height: 1150px;

    justify-content: center;
    align-items: center;
    text-align: center;

    box-shadow: 10px 5px 5px lightgray;
`;

const BoxContainer = styled.div`
    height: 280px;
`;

const Title = styled.h2`
    margin: 30px 10%;
`;

const TitleText = styled.h2`
    margin: 20px 30px;
    text-align: left;
`;

const InputForm = styled.form`
    margin: 0 35px;
    width: 400px;

    font-size: medium;
    display: block;
`; 

const InputText = styled.h4`
    text-align: left;

    margin: 7px auto;
`;

const InputItem = styled.input`
    margin-left: -100px;
    width: 300px;
    height: 35px;

    border: 1px solid #dbdbdb;

    padding-left: 10px;
    margin-bottom: 1px;

    ::placeholder {
        color: ${(props) => props.color};
        font-weight: 500;
    }
`;

const SelectGender = styled.div`
    display: flex;
`;

const RadioButton = styled.input`
    margin: 0 5px;
`;

const SelectBox = styled.select`
    margin-left: -100px;
    width: 300px;
    height: 35px;
    color: gray;

    border: 1px solid #dbdbdb;
`;

const Buttons = styled.div`
    text-align: center;
`;

const UpdateButton = styled.button`
    width: 150px;
    height: 50px;

    color: white;
    background-color: #51CF66;
    border: 1px solid transparent;
    font-size: medium;

    border-radius: 5px;
    margin: 0 2%;
`;

const ResignButton = styled.button`
    width: 150px;
    height: 50px;

    color: white;
    background-color: #FD7E14;
    border: 1px solid transparent;
    font-size: medium;

    border-radius: 5px;
    margin: 0 2%;
`;

const GotoCertify = styled.button`
    margin-left: 10px;

    text-decoration: underline;
    color: #51CF66;
    font-weight: 500;
`;

export default Profile;