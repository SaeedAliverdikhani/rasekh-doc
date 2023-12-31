---
sidebar_position: 6
title: کدنویسی استاندارد
---

## کد نویسی استاندارد را در دستور کار خود قرار دهید

در سال‌های اخیر تکنولوژی‌های مختلف در حوزه توسعه وب سایت به سرعت رشد کرده‌اند و هر یک از این تکنولوژی‌ها مزایای و معایب خاص خود را دارند. با توجه به اهمیت استفاده از آن‌ها، خیلی سریع به‌کار گرفته می‌شوند اما این موضوع در صورتی است که بسیاری از ساختارهای اصولی هنوز مورد مطالعه و پیاده‌سازی قرار نگرفته است.

دقت داشته باشید که طراحی سایت و کد نویسی جزئیات تاثیر مستقیمی بر سئو دارد، پس باید روش‌ها و ساختارهای استاندارد در این بخش مورد توجه قرار بگیرند. در واقع اگر می‌خواهید سایت شما رتبه خوبی در صفحه نتایج موتور جست‌وجو داشته باشد، باید به کدهای سایت توجه ویژه‌ای داشته باشید و آنها را برای موتورهای جست‌وجوگر در دسترس قرار دهید تا بررسی شوند.

موتورهای جست‌و‌جو از خزنده‌ها برای پیدا کردن صفحات مرتبط با نتایج جست‌و‌جو استفاده می‌کنند. عنکبوت جست‌و‌جوگر و خزنده موتور جست‌وجو هر دو کار خزش و کاوش در صفحات وب را انجام می‌دهند؛ با این تفاوت که خزنده مانند رهبر، به عنکبوت دستور می‌دهد که کدام صفحات دنبال و کدام یک اصلا دنبال نشوند. هدف فرآیند خزش، جمع آوری مفیدترین، مرتبط‌ترین صفحات با سرعت بالا و به‌صورت بهینه است. هر خزنده موتور جست‌وجو بر اساس الگوریتم خود، سایت‌ها را در اولویت قرار می‌دهد .

اما دقت داشته باشید که خزنده‌های موتور جست‌وجو (Crawlers) ، محدودیت هایی دارند که برخی از آنها موجب می‌شود سایت هارا به طور کامل وارسی نکنند. برای مثال، این خزنده‌ها، می‌توانند یک فایل متنی را به درستی تشخیص دهند و مفهوم آن را بیابند اما در گذشته نمی‌توانند یک فایل عکس و یا فیلم را به درستی کاوش کنند؛ به همین دلیل، نوشتن متن و کلمات مناسب در قسمت تگalt ، ضروری است.

علاوه براین اگردر کدهای سایت، به هر دلیلی مشکلاتی ایجاد شود که خزنده‌های موتور جست‌وجو نتوانند به سایت دسترسی داشته باشند، سایت شما ایندکس نخواهد شد؛ و به طبع آن، در صفحه نتایج جایگاهی نخواهید داشت. پس کدنویسی ساده و بهینه، برای بهبود عملکرد سایت شما ضروری است. زیرا دسترسی موتور جست‌وجو برای بررسی ساده‌تر می‌شود و همچنین کدهای زیاد و پیچیده، سرعت سایت را پایین می‌آورند و بر عملکرد سایت تاثیر منفی می‌گذارند.

تعدادی از مشکلاتی این حوزه که اغلب در سایت‌های مختلف وجود دارند، عبارتند از:

-   به کاربردن کدهای javascript به صورت inline یکی دیگر از اشتباهات رایج درهنگام کدنویسی سایت است. این کار، باعث ایجاد خطاهایی در سایت می‌شود که موجب می‌شود سایت شما به درستی نمایش پیدا نکند؛ پس اگر چنین مشکلی را در بخش کدهای سایت پیدا کردید، هرچه زودتر آن را بر طرف کنید.
-   استفاده از نسخه های قدیمی html و css ، مشکلات زیادی را در کدنویسی ما ایجاد می‌کند زیرا ممکن است برخی از مرورگر ها از نسخه های قدیمی html و css پشتیبانی نکنند.
-   فراموش کردن تگ‌های اصلی سایت مانند تگ title، مشکلی است که اغلب برنامه‌نویسان با آن مواجه می‌شوند؛ زیرا این تگ به صورت پیش فرض در IDE ها وجود ندارد. بنابراین فراموش نکنید این تگ را در قسمت head سایت، تعریف کنید.
-   نبستن تگ‌های زوج یکی از اصلی ترین مشکلاتی است که در کدنویسی صفحات وب ایجاد می‌شود که ممکن است برای تمام برنامه‌نویسان وب، پیش بیاید. تگ هایی مانند\<br\> در برخی از نسخه‌های html به صورت تک است و در نسخه 5 به صورت زوج استفاده می‌شود پس هنگام نوشتن کدها، به این نکته دقت کنید.
-   ID باید به صورت یکتا باشد و مربوط به شئ باشد که id برای آن تعریف شده است؛ بنابراین باید یک id فقط به یک شئ اختصاص یابد در غیر این صورت با خطا مواجه خواهیم شد.
-   ننوشتن کامنت، از آن جهت مهم است که شاید شما برای افزودن یک ویژگی خاص، به کمک یک برنامه نویس نیاز داشته باشید. در این صورت، نوشتن کامنت به برنامه نویس کمک خواهد کرد که ساختار کدها را درک کند و آسانتر، تغییرات لازم را در سایت ایجاد کند. فراموش نکنید کدهای شما باید جوری باشند که برنامه‌نویس‌های دیگر هم بتوانند روی آن کدها کار کنند.
-   به‌کار نبردن خاصیت‌های ضروری، مسئله مهمی است که اغلب برنامه نویسان، آن را فراموش می‌کنند؛ البته در میان حجم انبوه کدها، بروز چنین مشکلاتی طبیعی است. برای مثال، زمانی که از یک عکس استفاده می کنید، استفاده از تگ Alt ضروری است.
