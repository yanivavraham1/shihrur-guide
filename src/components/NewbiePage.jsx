import React from "react";
import Card1 from "./Card1";

function NewbiePage() {
  return (
    <div className="pt-5" id="newbiePage">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center px-10">
        המסלול למשוחרר הטרי
      </h1>
      <h2 className="text-1xl md:text-2xl lg:text-3xl text-center border-b-2">
        השתחררת? מזל טוב! הנה כמה דברים שאתה חייב לעשות ברגע שהשתחררת
      </h2>
      <Card1
        contentText="עד היום צהל דאג לבריאות שלכם אבל מיום שחרורכם האחריות הזו עוברת לקופת חולים. בדרך כלל קופת החולים שהייתם מבוטחים בה טרם גיוסכם תתקשר אליכם אבל בכל מקרה אנחנו ממליצים להתקשר אליהם ימים לפני שחרורכם ולבקש לדעת מהם פרטים על הזכויות שלכם"
        contentTitle="הרשמה לקופת חולים"
      ></Card1>
      <Card1
        contentText="בתוך חודשיים משחרורכם תאלצו לשלם לביטוח הלאומי דמי ביטוח לאומי וביטוח בריאות (כן גם אם אתם לא עובדים) ולכן תצטרכו לפתוח משתמש בביטוח לאומי תוכלו לשלם באיזור האישי באתר הביטוח הלאומי"
        contentTitle="פתיחת חשבון בביטוח לאומי ותשלום דמי ביטוח לאומי וביטוח בריאות"
      ></Card1>
      <Card1
        contentText="כחיילים משוחררים אתם זכאים להיות חלק ממועדון בהצדעה לתקופה של שלוש שנים מיום השחרור. המועדון מקנה כרטיס אשראי ללא דמי כרטיס עם הטבות שונות שאותן ניתן למצוא באתר בהצדעה "
        contentTitle="הרשמה למועדון בהצדעה והוצאת כרטיס אשראי - מועדון ההטבות לחיילים משוחררים ומשרתי מילואים פעילים"
      ></Card1>
      <Card1
        contentText="כחיילים משוחררים אתם זכאים לדברים נוספים שלא מצויינים באתר כמו יעוץ מקצועי ועוד בשביל למצוא את כל ההטבות תצטרכו לבקר באתר של האגף והקרן לחיילים משוחררים. בנוסף תוכלו למצוא את סכומי הפיקדון האישי והמענק שלכם באתר ולהגיש תביעות לפיקדון האישי למטרות ספציפיות טרם חלפו 5 שנים מיום השחרור"
        contentTitle="פתיחת משתמש באגף והקרן לחיילים משוחררים"
      ></Card1>
      <Card1
        contentText="כחיילים משוחררים אתם זכאים לתחבורה ציבורית בחינם למשך שנה בשביל לממש את ההטבה תוכלו להשתמש באפליקצית רב קו אונליין להטענת כרטיס רב-קו או שימוש אפליקציית ברקוד כמו Moovit או HopeOn Rav-Pass"
        contentTitle="הטענת רב-קו/אפליקציית תחבורה ציבורית בהטבת חיילים משוחררים (חינם לשנה)"
      ></Card1>
    </div>
  );
}

export default NewbiePage;
