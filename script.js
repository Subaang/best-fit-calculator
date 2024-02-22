

const go = document.querySelector("#go");
const table = document.querySelector("#table");



go.addEventListener('click',(event) => {
    const n = document.querySelector("#n").value;
    let calc = document.createElement('button');
    calc.className = "calc";
    calc.textContent = "calculate";
    table.appendChild(calc);
  
    
    table.insertAdjacentHTML('beforeend',"<div class='break'></div>");


    
    table.insertAdjacentHTML('beforeend',"<input type = 'text' class='in' value='x_i' disabled>");
    table.insertAdjacentHTML('beforeend',"<input type = 'text' class='in' value='y_i' disabled>");
    table.insertAdjacentHTML('beforeend',"<input type = 'text' class='in' value='x_i - x_bar' disabled>");
    table.insertAdjacentHTML('beforeend',"<input type = 'text' class='in' value='(x_i - x_bar)y_i' disabled>");
    table.insertAdjacentHTML('beforeend',"<div class='break'></div>");
    

    for(let i = 0; i < n; i++){
        let a,b,c,d;

        a = document.createElement('input');
        a.type = 'text';
        a.classList.add('in','x_i_'+i);
        table.appendChild(a);

        b = document.createElement('input');
        b.type = 'text';
        b.classList.add('in','y_i_'+i);
        table.appendChild(b);

        c = document.createElement('input');
        c.type = 'text';
        c.disabled = 'disabled';
        c.classList.add('in','x_i-mean_'+i);
        table.appendChild(c);

        d = document.createElement('input');
        d.type = 'text';
        d.disabled = 'disabled';
        d.classList.add('in','numerator_'+i);
        table.appendChild(d);

        table.insertAdjacentHTML('beforeend',"<div class='break'></div>");

    }
    

    
    calc.addEventListener('click', () => {
        for(let i = 0; i < n; i++){
            let x_bar = 0, y_bar = 0;
            // finding x_bar and y_bar
            for(let i = 0; i < n; i++){
                x_bar += parseFloat(document.querySelector('.x_i_'+i).value);
                y_bar += parseFloat(document.querySelector('.y_i_'+i).value);
            }
            x_bar /= n;
            y_bar /= n;
            //-----
            
            let x_i, y_i,third, numerator;

            for(let i = 0; i < n; i++){
                x_i = parseFloat(document.querySelector('.x_i_'+i).value);
                y_i = parseFloat(document.querySelector('.y_i_'+i).value);

                console.log(x_i);
                
                document.querySelector('.x_i-mean_'+i).value = x_i - x_bar;
                document.querySelector('.numerator_'+i).value = (x_i - x_bar)*y_i;

            }
        }
        
    })

});