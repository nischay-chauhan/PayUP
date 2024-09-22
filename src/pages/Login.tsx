import { IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Login: React.FC = () => {

    return (
        <IonPage>
            <IonHeader >
                <IonToolbar >
                    <IonTitle>Page Title hehe</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
             Login page
            </IonContent>
            <IonFooter>
                <IonToolbar >
                    <IonTitle>Footer</IonTitle>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
};

export default Login;