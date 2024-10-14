let str1 = "Hello World",
    str2 = 'This is JS',
    str3 = `This is Js too`,
    cars = "Audi,BMW,Mercedes";
    ;

let summ = 45.78;

    let out = "<div>";
        out+= "<h2>Summa za kurss "+summ+"!</h2>";
        out+="</div>";



    let out2 = `
        <div>
            <h2>Summa za kurss: ${summ}!</h2>
        </div>
    `;

        // document.write(out2);

        document.body.innerHTML = str1;
        console.log(str1);
        console.log(str1.charAt(2));
        console.log(str1[2]);
        console.log(str1.length);
        document.write("<br>");

        document.write(str1.toUpperCase())
        document.write(str1.substring(0,7));
        document.write(cars.split(""));
        console.log(cars.split(""));
        console.log(cars.split(","));
        // slice()

        let newString = str1.replace("World","Vitaly");
        document.write(newString);

        document.write("<br>");
        document.write("<br>");
        document.write("<br>");
    let Concatenated = str1.concat("::",str2,"::",str3,"::",cars);
    document.write(Concatenated);


    // 1. сделать калькулятор зарплат, стоимости работ, затраты на электроенергию
    // 2. сделать оформленный вывод информации вместе с тегами








