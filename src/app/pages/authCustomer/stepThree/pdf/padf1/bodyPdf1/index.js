import React from "react";

import {
  Page,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
  Text,
} from "@react-pdf/renderer";
const stylePdf = StyleSheet.create({
  main: {
    width: "98%",
    height: "87%",
    //  backgroundColor:'grey',
    border: "1px solid black",
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "flex-end",
    paddingTop: 2,
    paddingRight: 2,
    paddingLeft: 2,
  },
  textBody: {
    fontSize: 7.4,
    textAlign: "left",
  },
});

const BodyPdf1 = () => {
  return (
    <View style={stylePdf.main}>
      <Text style={stylePdf.textBody}>
        با توجه به ریسک موجود در معاملات سهام و حق تقدم خرید سهام در بازار پایه
        فرابورس ایران، به موجب این اقرارنامه اینجانب/ اینجانبان
        ....................................... اذعان و اقرار می دارم/ می داریم
      </Text>
      <Text style={stylePdf.textBody}>
        که با اطلاع دقیق و علم و آگاهی کافی در خصوص وضعیت مالی ناشران بازار
        پایه، ماهیت آن بازار، اطلاعیه های منتشره در سامانه رسمی افشای اطلاعات
        شرکت های ثبت شده نزد سازمان بورس و اوراق
      </Text>
      <Text style={stylePdf.textBody}>
        بهادار (کدال) و سایر ریسک های معامله در بازار پایه از جمله عدم افشای
        صحیح و کامل اطلاعات توسط ناشران و...، نسبت به معاملات سهام مذکور اقدام
        می نمایم/ می نماییم؛ همچنین اقرار کردم/ کردیم{" "}
      </Text>
      <Text style={stylePdf.textBody}>و متعهد و مطلع شدم/ شدیم:</Text>
      <Text style={stylePdf.textBody}>
        ۱-از تمامی شرایط، قوانین و مقررات مربوط به انجام معاملات در بازار پایه
        فرابورس ایران، تابلوهای معاملاتی و ریسک های مربوط به آن از جمله مفاد
        دستورالعمل پذیرش، عرضه و نقل و انتقال اوراق{" "}
      </Text>
      <Text style={stylePdf.textBody}>
        بهادار در فرابورس ایران، دستورالعمل اجرایی نحوه انجام معاملات اوراق
        بهادار در فرابورس ایران، دستورالعمل اجرایی نحوه انجام معاملات بلوک در
        فرابورس ایران و دستورالعمل انضباطی ناشران ثبت{" "}
      </Text>
      <Text style={stylePdf.textBody}>
        شده پذیرفته نشده مصوب هیات مدیره سازمان بورس و اوراق بهادار و همچنین از
        اصلاحات بعدی آن و سایر مقررات مربوط آگاهی دقیق و کامل دارم/ داریم.
      </Text>
      <Text style={stylePdf.textBody}>
        ۲-فرابورس ایران مطابق مقررات مربوط می تواند نسبت به اعطای مجوز فعالیت به
        مشتریان و معامله گران شركت های كارگزاری در هر یک از تابلوهای بازار پایه
        و طراحی، تعیین شروط مربوط و برگزاری
      </Text>
      <Text style={stylePdf.textBody}>
        آزمون هایی با هدف سنجش دانش، توانایی و مهارت معامله گران و مشتریان شركت
        های كارگزاری اقدام نماید؛ لذا در صورت عدم موفقیت اینجانب/ اینجانبان در
        آزمون های مذكور این موضوع به منزله{" "}
      </Text>
      <Text style={stylePdf.textBody}>
        عدم اخذ مجوز فعالیت در بازار و یا تابلوی مربوطه بوده و كارگزار می تواند
        ضمن جلوگیری از هرگونه فعالیت اینجانب/ شركت در بازار و یا تابلوی مربوط
        مانع فعالیت و دسترسی اینجانب/ شركت به بازار
      </Text>
      <Text style={stylePdf.textBody}>پایه شود.</Text>
      <Text style={stylePdf.textBody}>
        ۳-در صورت نبود قابلیت نقدشوندگی در نمادهای معاملاتی سهام و حق تقدم خرید
        سهام ناشران بازار پایه، مسئولیت سرمایه گذاری در این بازار با اینجانب/
        شركت است.{" "}
      </Text>
      <Text style={stylePdf.textBody}>
        ۴- ً قبل از شروع هرگونه فعالیت یا انجام معاملات در بازار پایه، از نرخ
        كارمزد و سایر هزینه های مربوط اطلاعات لازم را كاملا كسب نموده ام/ نموده
        ایم.{" "}
      </Text>
      <Text style={stylePdf.textBody}>
        ۵ -مطابق مقررات بازار پایه، سازمان بورس و اوراق بهادار یا فرابورس ایران
        می تواند تحت شرایط مندرج در مقررات مربوطه نماد معاملاتی را متوقف یا
        تعلیق نماید و اینجانب/ اینجانبان با علم و آگاهی{" "}
      </Text>
      <Text style={stylePdf.textBody}>
        . به این موضوع در این بازار سرمایه گذاری نموده و مسئولیت آن صرفا متوجه
        اینجانب/اینجانبان است
      </Text>
      <Text style={stylePdf.textBody}>
        ۶-معامله سهام یا حق تقدم خرید سهام شركت بورس انرژی ایران با حجم بزرگتر
        یا مساوی نیم درصد از سرمایه پایه و همچنین خرید اوراق بهادار آن شركت توسط
        اشخاص حقوقی یا نهادهای خاص كه{" "}
      </Text>
      <Text style={stylePdf.textBody}>
        دسته سهامداری ایشان بر اساسنامه شركت بورس انرژی ایران برای فرابورس مشخص
        نیست، منوط به اخذ تاییدیه از سازمان بورس مبنی بر رعایت محدودیت های
        قانونی و مقرراتی است و در صورت{" "}
      </Text>
      <Text style={stylePdf.textBody}>
        عدم رعایت محدودیت های معاملاتی در دسته های سهامداری شركت بورس انرژی
        ایران یا سایر موارد مذكوردر مقررات، فرابورس می تواند معاملات مزبور را
        تایید ننماید و در صورت وجود محدودیت های
      </Text>
      <Text style={stylePdf.textBody}>
        فنی در امكان عدم تایید معاملات و اعلام فرابورس ایران مبنی بر عدم رعایت
        محدودیت های معاملاتی فوق، كارگزار ناظر موظف است مازاد اوراق بهادار
        خریداری شده را در اولین روز كاری پس از انجام
      </Text>
      <Text style={stylePdf.textBody}>
        معامله، از طریق انجام حراج در نماد معاملاتی بازار عادی یا نمادی مجزا
        (حسب تشخیص فرابورس ایران) به عموم عرضه نماید. در صورت عدم امكان فروش به
        دلیل توقف نماد معاملاتی، مازاد سهام{" "}
      </Text>
      <Text style={stylePdf.textBody}>
        یا حق تقدم خرید سهام خریداری شده با اعلام فرابورس ایران به حالت مسدود در
        می آید و خریدار حق هیچگونه تصرف مالكانه ای (از جمله فروش، توثیق یا
        استفاده از حق رأی در مجامع عمومی ناشر)
      </Text>
      <Text style={stylePdf.textBody}>
        نسبت به اوراق بهادار مذكور را نداشته و كلیه خسارات و هزینه های ناشی از
        معامله مازاد اوراق بهادار از جمله كارمزدهای آن برعهده وی خواهد بود.
      </Text>
      <Text style={stylePdf.textBody}>
        ۷-برای خرید سهام و حق تقدم سهام در نمادهای معاملاتی بازار پایه از
        هیچگونه اعتباری استفاده ننموده و بر مبنای سهام ناشران بازار پایه اعتبار
        دریافت نمی نمایم/ نمی نماییم
      </Text>
      <Text style={stylePdf.textBody}>
        ۸-مطابق دستورالعمل پذیرش، عرضه و نقل و انتقال اوراق بهادار در فرابورس
        ایران، درج اوراق بهادار در بازار پایه و همچنین لغو درج آن ها با تایید
        كمیته درج فرابورس ایران صورت می پذیرد. علاوه بر
      </Text>
      <Text style={stylePdf.textBody}>
        این، تصمیم گیری در خصوص انتقال شركت ها بین تابلوهای بازار پایه و تعیین
        دوره های مورد رسیدگی، بر عهده كمیته مذكور است؛ لذا اینجانب/ اینجانبان حق
        هرگونه اعتراضی مبنی بر انتقال شركت ها
      </Text>
      <Text style={stylePdf.textBody}>
        فی مابین تابلوهای پایه زرد، نارنجی و قرمز و یا لغو درج آن ها را از خود
        سلب و ساقط كردم/ كردیم
      </Text>
      <Text style={stylePdf.textBody}>
        ۹-تطبیق سفارشات در معاملات نمادهای معاملاتی بازار پایه یا تغییر روش آن
        ها بر اساس شیوه هایی است كه به تصویب هیات مدیره فرابورس ایران و تایید
        سازمان بورس و اوراق بهادار می رسد.
      </Text>
      <Text style={stylePdf.textBody}>
        ۱۰-سفارشات موجود در سامانه معاملاتی حداكثر به مدت شش ماه پس از تاریخ
        ابلاغ اصلاحات مقررات بازار پایه قابل نمایش خواهد بود؛ لكن پس از مهلت
        مذكور تعداد سفارشات قابل مشاهده به{" "}
      </Text>
      <Text style={stylePdf.textBody}>
        صورت دوره ای و مرحله ای و به تناسب هر تابلو كاسته یا حذف خواهد شد و در
        مرحله پیش گشایش، قیمت نظری گشایش برای عموم منتشر می شود.
      </Text>
      <Text style={stylePdf.textBody}>
        ۱۱-جلسات رسمی و روزهای انجام معامله انواع اوراق بهادار در تابلوهای پایه
        زرد، نارنجی و قرمز، ساعت آغاز و خاتمه و مدت زمان هر جلسه معاملاتی و
        همچنین تعداد، مدت و انواع دسترسی معامله
      </Text>
      <Text style={stylePdf.textBody}>
        گران در مراحل انجام معامله، حداقل هر سفارش، حجم مبنا، واحد پایه هر
        سفارش، حداقل حجم هر سفارش، اعتبار زمانی سفارش و نیز محدودیت هایی از قبیل
        حداقل ارزش معاملات خرید برای معامله
      </Text>
      <Text style={stylePdf.textBody}>
        گران برخط یا عدم مشاركت معامله گران برخط در مراحل پیش گشایش توسط هیات
        مدیره فرابورس ایران تعیین می گردد
      </Text>
      <Text style={stylePdf.textBody}>
        ۲-ورود سفارش در نمادهای معاملاتی بازار پایه صرفا ً به صورت سفارش روز
        امكان پذیر است؛ مگر شرایط دیگری توسط فرابورس ایران اطلاع رسانی گردد كه
        با انتشار شرایط جدید در وب سایت رسمی شركت
      </Text>
      <Text style={stylePdf.textBody}>
        فرابورس ایران و اطلاع آن به عموم، برای اینجانب/ اینجانبان نیز الزام
        الامور بوده و آن را می پذیرم/ می پذیریم
      </Text>
      <Text style={stylePdf.textBody}>
        ۱۳-معاملات اوراق بهادار شركت هایی كه در تابلوهای بازار پایه درج گردیده
        اند، در تمامی جلسات رسمی معاملاتی به صورت حراج پیوسته و در محدوده دامنه
        نوسانی ۳ درصد در تابلو پایه زرد، ۲ درصد در{" "}
      </Text>
      <Text style={stylePdf.textBody}>
        تابلو پایه نارنجی و ۱ درصد در تابلو پایه قرمز نسبت به قیمت پایانی در
        آخرین جلسه معاملاتی برگزاری حراج پایانی قابل انجام است. انجام حراج
        پایانی در نمادهای معاملاتی تابلوهای پایه زرد، نارنجی{" "}
      </Text>
      <Text style={stylePdf.textBody}>
        و قرمز، با دامنه نوسان قیمتی ۲ برابر دامنه نوسان روزانه قیمتی نماد
        معاملاتی در بازار عادی به نحوی كه قیمت مرجع حراج پایانی، آخرین قیمت
        پایانی نماد معاملاتی است و حداقل هفته ای یكبار امكان
      </Text>
      <Text style={stylePdf.textBody}>
        پذیر است، مگر آنكه ناشر رویداد شركتی داشته باشد. در صورتی كه در روز
        تعیین شده امكان انجام حراج پایانی فراهم نباشد، انجام حراج پایانی به
        اولین جلسه رسمی معاملاتی بعد موكول می گردد
      </Text>
      <Text style={stylePdf.textBody}>
        ۱۳-۱ فرابورس ایران مجاز است تعداد حراج در بازار پایه را به تعداد روزهای
        كاری در هفته و با رعایت دامنه نوسان مجاز هر یک از تابلوها (محدوده دامنه
        نوسانی ۳ درصد در تابلو پایه زرد، ۲ درصد در
      </Text>
      <Text style={stylePdf.textBody}>
        تابلو پایه نارنجی و ۱ درصد در تابلو پایه قرمز نسبت به قیمت پایانی در روز
        قبل) مطابق با مكانیسم حراج روزانه در بازار اول و دوم افزایش دهد كه در
        این صورت حراج پایانی برگزار نخواهد گردید. این
      </Text>
      <Text style={stylePdf.textBody}>
        موضوع از روز چهارشنبه مورخ ۰۳/۰۷/۱۳۹۸ قابلیت اجرا داشته و فرابورس ایران
        باید اطلاع رسانی لازم را در این خصوص انجام دهد
      </Text>
      <Text style={stylePdf.textBody}>
        ۱۳-۲ قیمت مرجع برای محاسبه دامنه نوسان در زمان برگزاری حراج پایانی، حسب
        مورد آخرین قیمت پایانی در نماد معاملاتی یا میانگین موزون قیمت معاملات
        انجام شده نماد طی جلسه معاملاتی
      </Text>
      <Text style={stylePdf.textBody}>
        قبل از آغاز مرحله حراج پایانی همان جلسه معاملاتی است و قیمت كشف شده در
        حراج پایانی مذكور نیز به عنوان قیمت مرجع برای محاسبه دامنه نوسان در
        جلسات معاملاتی پس از آن است.
      </Text>
      <Text style={stylePdf.textBody}>
        ۱-۲-۱۳ در صورت عدم كشف قیمت یا عدم تایید قیمت كشف شده در حراج پایانی
        مذكور، حسب مورد آخرین قیمت پایانی در نماد معاملاتی یا میانگین موزون قیمت
        معاملات انجام شده طی جلسه{" "}
      </Text>
      <Text style={stylePdf.textBody}>
        معاملاتی قبل از آغاز مرحله حراج پایانی همان جلسه معاملاتی، به عنوان قیمت
        مرجع برای محاسبه دامنه نوسان قیمت در جلسه معاملاتی پس از آن است.
      </Text>
      <Text style={stylePdf.textBody}>
        ۱۴-تعداد حراج پایانی حداقل یكبار در هفته برای هر تابلو خواهد بود، لیكن
        امكان افزایش تعداد حراج پایانی و دامنه نوسان هر تابلو با پیشنهاد فرابورس
        ایران و تایید سازمان بورس و اوراق بهادار وجود
      </Text>
      <Text style={stylePdf.textBody}>دارد. </Text>
      <Text style={stylePdf.textBody}>
        ۱۵-فعالیت بازارگردانی در خصوص نمادهای تابلوهای بازار پایه براساس ضوابطی
        كه به تایید هیات مدیره فرابورس خواهد رسید، مطابق دستورالعمل مربوطه امكان
        پذیر است. همچنین بازارگردان می تواند{" "}
      </Text>
      <Text style={stylePdf.textBody}>
        دامنه نوسان قیمتی نماد معاملاتی را تا دو برابر دامنه نوسان روزانه قیمتی
        نماد معاملاتی در بازار عادی، به شرطی كه از محدودیت دامنه نوسان روزانه
        قیمتی در بازار دوم فرابورس بیشتر نشود، افزایش
      </Text>
      <Text style={stylePdf.textBody}>
        دهد. همچنین بازارگردان می تواند قیمت مرجع نماد معاملاتی را ضمن اعلام به
        فرابورس تعیین نماید.
      </Text>
      <Text style={stylePdf.textBody}>
        ۱۶-آن دسته از سهامدار/ سهامداران عمده ای كه مالكیت حداقل ۲۵ درصد از سهام
        یک ناشر در بازار پایه فرابورس را دارند، برای عرضه بیش از ۲ درصد از كل
        سهام تحت مالكیت یا كنترل و نفوذ خود در
      </Text>
      <Text style={stylePdf.textBody}>
        بازار عادی باید نسبت به اخذ تاییدیه كمیته درج اقدام نمایند. سایر
        سهامدار/ سهامداران عمده كه مالكیت كمتر از ۲۵ درصد و حداقل ۱ درصد از سهام
        یک ناشر در بازار پایه فرابورس را دارند، برای عرضه
      </Text>
      <Text style={stylePdf.textBody}>
        هر میزان از سهام تحت مالكیت یا كنترل یا نفوذ خود در بازار عادی باید نسبت
        به اخذ تاییدیه كمیته درج و حسب مورد ارائه تعهد خریدار یا خریداران جدید
        مبنی بر اینكه در هر زمان كه تصمیمی برای{" "}
      </Text>
      <Text style={stylePdf.textBody}>
        عرضه سهام خریداری شده اتخاذ نمودند؛ سهام مذكور را با هر تعداد اوراق
        بهادار كه باشد صرفا براساس روشی كه كمیته درج تعیین می نماید عرضه کنند،
        امكان پذیر است. در صورت عدم رعایت این ماده{" "}
      </Text>
      <Text style={stylePdf.textBody}>
        مدیرعامل فرابورس می تواند معاملات انجام شده را تایید نکند.
      </Text>
      <Text style={stylePdf.textBody}>
        ۱۷-ریسک های مذكور در این سند جنبه حصری ندارند و اینجانب/ اینجانبان اقرار
        میدارم/ میداریم كه نسبت به تمام ریسک های این بازار اعم از موارد مذكور در
        این بیانیه و غیر آن را آگاهی كامل داشته{" "}
      </Text>
      <Text style={stylePdf.textBody}>
        و آن ریسك ها را مشمول مفاد این اقرارنامه و بیانیه پذیرش ریسک، تلقی می
        نمایم/ می نماییم.
      </Text>
      <Text style={stylePdf.textBody}>
        ۱۸-متعهد شدم/ شدیم مفاد تمامی قوانین و مقررات لازم الاجرای بازار سرمایه
        به ویژه در حوزه شركت های درج شده در بازار پایه و ضوابط معاملاتی آن ها را
        رعایت نموده و از هرگونه اقدامی كه منجر به{" "}
      </Text>
      <Text style={stylePdf.textBody}>
        نقض قوانین و مقررات شود، خودداری نمایم/ نماییم. به موجب این سند اینجانب
        ......................................... اقرارنامه و بیانیه پذیرش ریسک
        معاملات سهام و حق تقدم خرید سهام در بازار پایه
      </Text>
      <Text style={stylePdf.textBody}>
        را دریافت و مطالعه نموده و ضمن اعلام و اقرار به آگاهی و اطلاع از كلیه
        قوانین و مقررات و شرایط معاملاتی و ریسک هایی كه در آن بازار متصور بوده و
        احتمال وقوع دارد و نیز با شناخت و درک كامل
      </Text>
      <Text style={stylePdf.textBody}>از ماهیت امر و شرایط و مقررات مربوط، مراتب فوق الذكر را با اراده و اختیار كامل تأیید نموده و هیچ گونه اعتراض و ادعایی اعم از حقوقی و جزایی در حال حاضر یا بعدا در این خصوص ندارم/ نداریم و</Text>
      <Text style={stylePdf.textBody}>حق دعوی خود در این زمینه را علی الدوام سلب و ساقط كردم/ كردیم</Text>
    </View>
  );
};
export default BodyPdf1;
