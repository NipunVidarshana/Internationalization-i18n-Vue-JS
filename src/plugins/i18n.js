import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  en: {
    heading: "Christmas Day Celebration",
    content:
      "Christmas carols are played on radios and televisions to mark the day. Most families start by going to church where performances and songs are done. Then later, they join their families to exchange gifts and celebrate with food and music. Happiness during Christmas is like no other.Homemade traditional plum cakes, cupcakes, and muffins are the special treats on Christmas. Kids are showered with lots of presents and new dresses. They also get to meet the ‘Santa Claus’, dressed in a fluffy red and white costume, who greets them with hugs and gifts.",
  },
  es: {
    heading: "Celebración del día de Navidad",
    content:
      "Se reproducen villancicos en radios y televisiones para conmemorar el día. La mayoría de las familias comienzan yendo a la iglesia donde se realizan presentaciones y cantos. Luego, se unen a sus familias para intercambiar regalos y celebrar con comida y música. La felicidad durante la Navidad es como ninguna otra. Los tradicionales pasteles de ciruela, cupcakes y muffins caseros son las delicias especiales de la Navidad. Los niños reciben muchos regalos y vestidos nuevos. También conocen al 'Papá Noel', vestido con un disfraz rojo y blanco esponjoso, que los recibe con abrazos y regalos.",
  },
  si: {
    heading: "නත්තල් දින සැමරුම",
    content:
      "නත්තල් දිනය සනිටුහන් කිරීම සඳහා ගුවන්විදුලි හා රූපවාහිනීවල නත්තල් කැරොල් වාදනය කෙරේ. බොහෝ පවුල් ආරම්භ වන්නේ ප්‍රසංග සහ ගීත ගායනා කරන පල්ලියට යාමෙනි. පසුව, ඔවුන් තම පවුල් සමඟ තෑගි හුවමාරු කර ගැනීමට සහ ආහාර හා සංගීතයෙන් සමරනු ලබයි. නත්තල් සමයේ සතුට අන් කිසිවකට සමාන නොවේ. ගෙදර හැදූ සාම්ප්‍රදායික ප්ලම් කේක්, කප් කේක් සහ මෆින් නත්තලේ විශේෂ සංග්‍රහ වේ. ළමයින්ට බොහෝ තෑගි සහ නව ඇඳුම් වලින් වැසී ඇත. සිනිඳු රතු සහ සුදු ඇඳුමකින් සැරසී සිටින ‘නත්තල් සීයා’ ඔවුන්ව වැළඳගැනීමෙන් හා තෑගිබෝගවලින් පිළිගන්නා අය ද මුණ ගැසේ.",
  },
  ta: {
    heading: "கிறிஸ்துமஸ் தின கொண்டாட்டம்",
    content:
      "இந்த நாளைக் குறிக்கும் வகையில் ரேடியோக்கள் மற்றும் தொலைக்காட்சிகளில் கிறிஸ்துமஸ் பாடல்கள் இசைக்கப்படுகின்றன. பெரும்பாலான குடும்பங்கள் தேவாலயத்திற்குச் செல்வதன் மூலம் தொடங்குகின்றன, அங்கு நிகழ்ச்சிகள் மற்றும் பாடல்கள் செய்யப்படுகின்றன. பின்னர், அவர்கள் தங்கள் குடும்பத்தினருடன் பரிசுகளை பரிமாறிக்கொண்டு உணவு மற்றும் இசையுடன் கொண்டாடுகிறார்கள். கிறிஸ்துமஸின் போது மகிழ்ச்சி என்பது வேறு எதற்கும் இல்லை. வீட்டில் தயாரிக்கப்பட்ட பாரம்பரிய பிளம் கேக்குகள், கப்கேக்குகள் மற்றும் மஃபின்கள் கிறிஸ்துமஸின் சிறப்பு விருந்தாகும். குழந்தைகள் நிறைய பரிசுகள் மற்றும் புதிய ஆடைகள் மூலம் மழை. அவர்கள் 'சாண்டா கிளாஸை' சந்திக்கிறார்கள், பஞ்சுபோன்ற சிவப்பு மற்றும் வெள்ளை உடையில் அணிந்து, அவர்களை கட்டிப்பிடித்து பரிசுகளுடன் வரவேற்கிறார்கள்.",
  },
  zh: {
    heading: "圣诞节庆祝活动",
    content:
      "广播和电视上播放圣诞颂歌来纪念这一天。大多数家庭首先去教堂，那里有表演和歌曲。然后，他们与家人一起交换礼物，并用食物和音乐来庆祝。圣诞节的快乐是独一无二的。自制的传统梅子蛋糕、纸杯蛋糕和松饼是圣诞节的特色美食。孩子们收到了大量的礼物和新衣服。他们还会见到穿着蓬松的红白相间服装的“圣诞老人”，圣诞老人会用拥抱和礼物迎接他们。",
  },
};

const i18n = new VueI18n({
  locale: "en", // set locale
  fallbackLocale: "es", // set fallback locale
  messages, // set locale messages
});

export default i18n;
