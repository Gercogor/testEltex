      (function rndStr() {
        const litters = 'qwertyuiopasdfghjklzxcvbnm'
        const numbers = '0123456789'
        const symbols = '+-_$~'
        const blocked = 'cpsx'
        let maxLength = (numbers+litters+symbols).length
        let str= '';
        let n= prompt('string`s length');
        while (str.length < n) {
          let a = (numbers+litters+symbols)[Math.floor(Math.random() * maxLength)]
          if (!blocked.includes(a))
            str += a;
        }
        alert(str);
        let symb1 = prompt('Replace litters');
        let i = 0;
        str = str.split('');
        while (i<str.length) {
          if(litters.includes(str[i])) str[i] = symb1
          i++
        }
        let symb2 = prompt('Replace numbers');
        i = 0;
        while (i<str.length) {
          if(numbers.includes(str[i])) str[i] = symb2
          i++
        }
        str = str.join('')
        alert(str)
        alert(
          `count of symbols 1 = ${str.length - str.split(symb1).join('').length} ;
           count of symbols 2 = ${str.length - str.split(symb2).join('').length} ;
           count of unchanged symbols =  ${str.split(symb1).join('').split(symb2).join('').length} ;
          `
        )
      })()
