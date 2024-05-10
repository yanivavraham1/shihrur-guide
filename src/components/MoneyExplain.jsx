function MoneyExplain() {
  return (
    <div className="p-5 bg-zinc-50 w-fit mx-auto border-2">
      <h1 className="font-bold">איך לחשב את המענק והפיקדון שלי?</h1>
      <ul>
        <li>
          חיילות.ים ששירתו כלוחמים - את מספר חודשי הטירונות יש למלא במחשבון
          כ"תומך לחימה". את יתר תקופת השירות יש להגדיר במחשבון כ"לוחמים".
        </li>
        <li>
          חיילות.ים ששירתו כתומכי לחימה – את מספר חודשי הטירונות יש למלא במחשבון
          כ"עורפי". את יתר תקופת השירות יש להגדיר במחשבון כ"תומך לחימה".
        </li>
        <li>
          מסיימי שירות לאומי-אזרחי – יש להגדיר את תקופת השירות במחשבון כ"עורפי".
        </li>
      </ul>
    </div>
  );
}

export default MoneyExplain;