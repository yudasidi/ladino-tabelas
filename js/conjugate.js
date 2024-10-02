function conjugate(verb) {
    let message = "";
    let conjugation = "";

    verb=verb.trim().toLowerCase().replace(/[´.,/#!$%^&*;:{}=\-_+`~()'?¿¡!|]/g,"");

    if (verb === "") {
        messageElement.innerHTML = "No eskrivites ningun verbo!";
        return;
    }

    let baseVerb = verb;
    // Remove 'se' if it is a reflexive verb
    if (verb.endsWith('se')) {
        baseVerb = verb.slice(0, -2); // Remove 'se'
    }
   
    irrind=irregularVerbs.indexOf(baseVerb);
    if (irrind < 0) { 
        // Not an irregular verb
        // Check if the verb has a valid ending
        const verbEnding = getVerbEnding(verb);
        if (verbEnding === null) {
            messageElement.innerHTML = "No eskrivites un verbo korrekto. Eskrive un verbo.";
            return; // Exit function early if the verb is invalid
        }
        if (!regularVerbs.includes(baseVerb)) {
            message = `${verb.toUpperCase()}: No lo tengo en mis datos. Si es regolar, se konjuga ansina: `;
        }
        conjugation=conjugateRegular(baseVerb,verbEnding);
    } else {
        // This is an irregular verb (found in our repository)
        vv=irregularVerbsData[irrind];
        conjugation = buildHTML(vv);;
    }
    messageElement.innerHTML = message;
    conjugationElement.innerHTML = conjugation;
}

// Function to determine the verb ending
function getVerbEnding(verb) {    
    if (verb.endsWith("ar")) {
        return "ar";
    } else if (verb.endsWith("er")) {
        return "er";
    } else if (verb.endsWith("ir")) {
        return "ir";
    } else if  (verb.endsWith("arse")) {
        return "arse"
    } else if  (verb.endsWith("erse")) {
        return "erse"
    } else if  (verb.endsWith("irse")) {
        return "irse"
    } else {
        return null;
    }
}

function conjugateRegular(verb, ending) {
    switch (ending) {
        case "ar":
            stem = verb.slice(0, -2);
            sverb=verb;
            return conjugateAR(verb);
            break;
        case "er":
            stem = verb.slice(0, -2);
            sverb=verb;
            return conjugateER(verb);
            break;
        case "ir":
            stem = verb.slice(0, -2);
            sverb= verb;
            return conjugateIR(verb);
            break;
    }
    // We should not arrive here
}

function conjugateAR(verb) {
    stem = verb.slice(0, -2);
    gnrl = [verb, stem.concat("ando"), stem.concat("ado")]
    present = [stem.concat("o"), stem.concat("as"), stem.concat("a"), stem.concat("amos"), stem.concat("ásh"), stem.concat("an")];
    preterite = [stem.concat("í"), stem.concat("ates"), stem.concat("ó"), stem.concat("imos"), stem.concat("atesh"), stem.concat("aron")];
    imperfect = [stem.concat("ava"), stem.concat("avas"), stem.concat("ava"), stem.concat("ávamos"), stem.concat("avash"), stem.concat("avan")];
    future = [stem.concat("aré"), stem.concat("arás"), stem.concat("ará"), stem.concat("aremos"), stem.concat("arésh"), stem.concat("arán")];
    conditional = [stem.concat("aría"), stem.concat("arías"), stem.concat("aría"), stem.concat("aríamos"), stem.concat("aríash"), stem.concat("arían")];
    subjPresent = [stem.concat("e"), stem.concat("es"), stem.concat("e"), stem.concat("emos"), stem.concat("ésh"), stem.concat("en")];
    subjImperfect = [stem.concat("ara"), stem.concat("aras"), stem.concat("ara"), stem.concat("áramos"), stem.concat("arash"), stem.concat("aran")];
    imperativ = [stem.concat("a"), stem.concat("ad"), stem.concat("es"), stem.concat("ésh")];

    // Special casese "iar"  e.g.estudiar
    if (verb.endsWith("iar")) {
        stem1 = verb.slice(0, -3);
        preterite[0]=stem1.concat("yí");
        preterite[3]=stem1.concat("yí");
    }
    vv = new verbData(gnrl, present, preterite, imperfect, future, conditional, subjPresent, subjImperfect, imperativ);
    return buildHTML(vv);
}

function conjugateIR(verb) {
    gnrl = [verb, stem.concat("iendo"), stem.concat("ido")]
    present = [stem.concat("o"), stem.concat("es"), stem.concat("e"), stem.concat("imos"), stem.concat("ísh"), stem.concat("en")];
    preterite = [stem.concat("í"), stem.concat("ites"), stem.concat("ió"), stem.concat("imos"), stem.concat("itesh"), stem.concat("ieron")];
    imperfect = [stem.concat("ía"), stem.concat("ías"), stem.concat("ía"), stem.concat("íamos"), stem.concat("íash"), stem.concat("ían")];
    future = [stem.concat("iré"), stem.concat("irás"), stem.concat("irá"), stem.concat("iremos"), stem.concat("irésh"), stem.concat("irán")];
    conditional = [stem.concat("iría"), stem.concat("irías"), stem.concat("iría"), stem.concat("iríamos"), stem.concat("iríash"), stem.concat("irían")];
    subjPresent = [stem.concat("a"), stem.concat("as"), stem.concat("a"), stem.concat("amos"), stem.concat("ásh"), stem.concat("an")];
    subjImperfect = [stem.concat("iera"), stem.concat("ieras"), stem.concat("iera"), stem.concat("iéramos"), stem.concat("ierash"), stem.concat("ieran")];
    imperativ = [stem.concat("e"), stem.concat("id"), stem.concat("as"), stem.concat("ásh")];

    // Special casese "uir"  e.g.construir
    if (verb.endsWith("uir")) {
        gnrl[1] = stem.concat("yendo");      //gerundio
        present[0]= stem.concat("yo");
        present[1]= stem.concat("yes");
        present[2]= stem.concat("ye");
        present[5]= stem.concat("yen");
        preterite[2]= stem.concat("yó")
        preterite[5]= stem.concat("yeron")
        subjPresent = [stem.concat("ya"), stem.concat("yas"), stem.concat("ya"), stem.concat("yamos"), stem.concat("yásh"), stem.concat("yan")];
        subjImperfect = [stem.concat("yera"), stem.concat("yeras"), stem.concat("yera"), stem.concat("yéramos"), stem.concat("yerash"), stem.concat("yeran")];
        imperativ = [stem.concat("ye"), stem.concat("id"), stem.concat("yas"), stem.concat("yásh")];
    }    
    vv = new verbData(gnrl, present, preterite, imperfect, future, conditional, subjPresent, subjImperfect, imperativ);
    return buildHTML(vv);
}

function conjugateER(verb) {
    gnrl = [verb, stem.concat("iendo"), stem.concat("ido")]
    present = [stem.concat("o"), stem.concat("es"), stem.concat("e"), stem.concat("emos"), stem.concat("ésh"), stem.concat("en")];
    preterite = [stem.concat("í"), stem.concat("ites"), stem.concat("ió"), stem.concat("imos"), stem.concat("itesh"), stem.concat("ieron")];
    imperfect = [stem.concat("ía"), stem.concat("ías"), stem.concat("ía"), stem.concat("íamos"), stem.concat("íash"), stem.concat("ían")];
    future = [stem.concat("eré"), stem.concat("erás"), stem.concat("erá"), stem.concat("eremos"), stem.concat("erésh"), stem.concat("erán")];
    conditional = [stem.concat("ería"), stem.concat("erías"), stem.concat("ería"), stem.concat("eríamos"), stem.concat("eríash"), stem.concat("erían")];
    subjPresent = [stem.concat("a"), stem.concat("as"), stem.concat("a"), stem.concat("amos"), stem.concat("ásh"), stem.concat("an")];
    subjImperfect = [stem.concat("iera"), stem.concat("ieras"), stem.concat("iera"), stem.concat("iéramos"), stem.concat("ierash"), stem.concat("ieran")];
    imperativ = [stem.concat("e"), stem.concat("ed"), stem.concat("as"), stem.concat("ásh")];

    // Special casese "eser"   e.g. aborreser, amaneser
    if (verb.endsWith("eser")) {
        gnrl[1] = stem.concat("iendo");      //gerundio
        present[0]= stem.concat("ko");

        subjPresent = [stem.concat("ka"), stem.concat("kas"), stem.concat("ka"), stem.concat("kamos"), stem.concat("kásh"), stem.concat("kan")];
        imperativ = [stem.concat("e"), stem.concat("ed"), stem.concat("kas"), stem.concat("kásh")];
    }    

    vv = new verbData(gnrl, present, preterite, imperfect, future, conditional, subjPresent, subjImperfect, imperativ);
    return buildHTML(vv);
}