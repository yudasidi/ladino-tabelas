function buildHTML(vv) {
    return `
    <div class="conjugation-section">
        <div class="conjugation-columns">
            <div class="column">
                <tt>INFINITIVO</tt><br>
                <table class="conjugation-table">
                    <tr class="row"><td class="form">${vv.gen[0]}</td></tr>
                </table>
            </div>
            <div class="column">
                <tt>DJERUNDIO</tt><br>
                <table class="conjugation-table">
                    <tr class="row"><td class="form">${vv.gen[1]}</td></tr>
                </table>                    
            </div>
            <div class="column">
                <tt>PARTISIPIO</tt><br>
                <table class="conjugation-table">
                    <tr class="row"><td class="form">${vv.gen[2]}</td></tr>
                </table>
            </div>
        </div>        
        <div class="conjugation-columns">
            <div class="column">
                <tt>PREZENTE</tt><br>
                <table class="conjugation-table">
                    <tr class="row"><td class="form">${vv.prsnt[0]}</td></tr>
                    <tr class="row"><td class="form">${vv.prsnt[1]}</td></tr>
                    <tr class="row"><td class="form">${vv.prsnt[2]}</td></tr>
                    <tr class="row"><td class="form">${vv.prsnt[3]}</td></tr>
                    <tr class="row"><td class="form">${vv.prsnt[4]}</td></tr>
                    <tr class="row"><td class="form">${vv.prsnt[5]}</td></tr>
                </table>
            </div>
            <div class="column">
                <tt>IMPERFEKTO</tt><br>
                <table class="conjugation-table">
                    <tr class="row"><td class="form">${vv.imprfct[0]}</td></tr>
                    <tr class="row"><td class="form">${vv.imprfct[1]}</td></tr>
                    <tr class="row"><td class="form">${vv.imprfct[2]}</td></tr>
                    <tr class="row"><td class="form">${vv.imprfct[3]}</td></tr>
                    <tr class="row"><td class="form">${vv.imprfct[4]}</td></tr>
                    <tr class="row"><td class="form">${vv.imprfct[5]}</td></tr>
                </table>
            </div>     
            <div class="column">
                <tt>PASADO</tt><br>
                <table class="conjugation-table">
                    <tr class="row"><td class="form">${vv.past[0]}</td></tr>
                    <tr class="row"><td class="form">${vv.past[1]}</td></tr>
                    <tr class="row"><td class="form">${vv.past[2]}</td></tr>
                    <tr class="row"><td class="form">${vv.past[3]}</td></tr>
                    <tr class="row"><td class="form">${vv.past[4]}</td></tr>
                    <tr class="row"><td class="form">${vv.past[5]}</td></tr>
                </table>
            </div>
            <div class="column">
                <tt>FUTURO</tt><br>
                <table class="conjugation-table">
                    <tr class="row"><td class="form">${vv.ftr[0]}</td></tr>
                    <tr class="row"><td class="form">${vv.ftr[1]}</td></tr>
                    <tr class="row"><td class="form">${vv.ftr[2]}</td></tr>
                    <tr class="row"><td class="form">${vv.ftr[3]}</td></tr>
                    <tr class="row"><td class="form">${vv.ftr[4]}</td></tr>
                    <tr class="row"><td class="form">${vv.ftr[5]}</td></tr>
                </table>
            </div>
        </div>

        <br>
        <div class="conjugation-columns">
            <div class="column">
                <tt>SUBJUNTIVO</tt><br>
                <br>
                <table class="conjugation-table">
                    <tr class="row"><td class="form">${vv.sbjnt[0]}</td></tr>
                    <tr class="row"><td class="form">${vv.sbjnt[1]}<br>&nbsp</td></tr>
                    <tr class="row"><td class="form">${vv.sbjnt[2]}</td></tr>
                    <tr class="row"><td class="form">${vv.sbjnt[3]}</td></tr>
                    <tr class="row"><td class="form">${vv.sbjnt[4]}<br>&nbsp</td></tr>
                    <tr class="row"><td class="form">${vv.sbjnt[5]}</td></tr>
                </table>
            </div>
            
            <div class="column">
                <tt>SUBJUNTIVO</tt><br>
                <tt>IMPERFEKTO</tt><br>
                <table class="conjugation-table">
                    <tr class="row"><td class="form">${vv.sbjntImprf[0]}</td></tr>
                    <tr class="row"><td class="form">${vv.sbjntImprf[1]}<br>&nbsp</td></tr>
                    <tr class="row"><td class="form">${vv.sbjntImprf[2]}</td></tr>
                    <tr class="row"><td class="form">${vv.sbjntImprf[3]}</td></tr>
                    <tr class="row"><td class="form">${vv.sbjntImprf[4]}<br>&nbsp</td></tr>
                    <tr class="row"><td class="form">${vv.sbjntImprf[5]}</td></tr>
                </table>
            </div>        

            <div class="column">
                <tt>KONDISIONAL</tt><br>
                <br>
                <table class="conjugation-table">
                    <tr class="row"><td class="form">${vv.cndtnl[0]}</td></tr>
                    <tr class="row"><td class="form">${vv.cndtnl[1]}<br>&nbsp</td></tr>
                    <tr class="row"><td class="form">${vv.cndtnl[2]}</td></tr>
                    <tr class="row"><td class="form">${vv.cndtnl[3]}</td></tr>
                    <tr class="row"><td class="form">${vv.cndtnl[4]}<br>&nbsp</td></tr>
                    <tr class="row"><td class="form">${vv.cndtnl[5]}</td></tr>
                </table>
            </div>
            <div class="column">
                <tt>IMPERATIVO</tt><br>
                <br>
                <table class="conjugation-table">
                    <tr class="row"><td class="form">&nbsp</td></tr>
                    <tr class="row"><td class="form">${vv.imprtv[0]}<br>
                    no ${vv.imprtv[2]}</td></tr>
                    <tr class="row"><td class="form">&nbsp</td></tr>
                    <tr class="row"><td class="form">&nbsp</td></tr>
                    <tr class="row"><td class="form">${vv.imprtv[1]}<br>
                    no ${vv.imprtv[3]}</td></tr>
                    <tr class="row"><td class="form">&nbsp</td></tr>                    
                    </table>
            </div>
        <div>
    </div>
    `;
}