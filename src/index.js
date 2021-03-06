module.exports = function toReadable (n) {
    if (n == 1) {return 'one';}; if (n == 2) {return 'two';}; if (n == 3) {return 'three';};
    if (n == 4) {return 'four';}; if (n == 5) {return 'five';}; if (n == 6) {return 'six';};
    if (n == 7) {return 'seven';}; if (n == 8) {return 'eight';}; if (n == 9) {return 'nine';};
    if (n == 10) {return 'ten';}; if (n == 11) {return 'eleven';}; if (n == 12) {return 'twelve';};
    if (n == 13) {return 'thirteen';};if (n == 14) {return 'fourteen';};if (n == 15) {return 'fifteen';};
    if (n == 16) {return 'sixteen';};if (n == 17) {return 'seventeen';};if (n == 18) {return 'eighteen';};
    if (n == 19) {return 'nineteen';};if (n == 20) {return 'twenty';};if (n == 30) {return 'thirty';};
    if (n == 40) {return 'forty';};if (n == 50) {return 'fifty';};if (n == 60) {return 'sixty';};
    if (n == 70) {return 'seventy';};if (n == 80) {return 'eighty';};if (n == 90) {return 'ninety';};
    if (n == 100) {return 'one hundred';}; if (n == 200) {return 'two hundred';}; if (n == 300) {return 'three hundred';};
    if (n == 400) {return 'four hundred';}; if (n == 500) {return 'five hundred';}; if (n == 600) {return 'six hundred';};
    if (n == 700) {return 'seven hundred';}; if (n == 800) {return 'eight hundred';}; if (n == 900) {return 'nine hundred';};
    if (n == 0) {return 'zero';};
    
    if (n > 20 && n < 100) {
        {n = String(n).split('')};
        if (n[1] == '1') { n[1] = 'one'};
        if (n[1] == '2') { n[1] = 'two'};
        if (n[1] == '3') { n[1] = 'three'};
        if (n[1] == '4') { n[1] = 'four'};
        if (n[1] == '5') { n[1] = 'five'};
        if (n[1] == '6') { n[1] = 'six'};
        if (n[1] == '7') { n[1] = 'seven'};
        if (n[1] == '8') { n[1] = 'eight'};
        if (n[1] == '9') { n[1] = 'nine'};
    
        if (n[0] == '2') { n[0] = 'twenty'};
        if (n[0] == '3') { n[0] = 'thirty'};
        if (n[0] == '4') { n[0] = 'forty'};
        if (n[0] == '5') { n[0] = 'fifty'};
        if (n[0] == '6') { n[0] = 'sixty'};
        if (n[0] == '7') { n[0] = 'seventy'};
        if (n[0] == '8') { n[0] = 'eighty'};
        if (n[0] == '9') { n[0] = 'ninety'};
        
        return n.join(' ');
    }
    
    if (n > 100 && n < 1000) {
                {n = String(n).split('')};
                if (n[0] == '1') { n[0] = 'one hundred'};
                if (n[0] == '2') { n[0] = 'two hundred'};
                if (n[0] == '3') { n[0] = 'three hundred'};
                if (n[0] == '4') { n[0] = 'four hundred'};
                if (n[0] == '5') { n[0] = 'five hundred'};
                if (n[0] == '6') { n[0] = 'six hundred'};
                if (n[0] == '7') { n[0] = 'seven hundred'};
                if (n[0] == '8') { n[0] = 'eight hundred'};
                if (n[0] == '9') { n[0] = 'nine hundred'};
            
                if (n[1] == '0') {return n[0] + ' ' + check(n[2])};
                if (n[1] == '1') { if (n[2] == '1') {return n[0] + ' ' + 'eleven'};
                                   if (n[2] == '2') {return n[0] + ' ' + 'twelve'};
                                   if (n[2] == '3') {return n[0] + ' ' + 'thirteen'};
                                   if (n[2] == '4') {return n[0] + ' ' + 'fourteen'};
                                   if (n[2] == '5') {return n[0] + ' ' + 'fifteen'};
                                   if (n[2] == '6') {return n[0] + ' ' + 'sixteen'};
                                   if (n[2] == '7') {return n[0] + ' ' + 'seventeen'};
                                   if (n[2] == '8') {return n[0] + ' ' + 'eighteen'};
                                   if (n[2] == '9') {return n[0] + ' ' + 'nineteen'};
                                   if (n[2] == '0') {return n[0] + ' ' + 'ten'};
                };
                if (n[1] == '2') { n[1] = 'twenty'};
                if (n[1] == '3') { n[1] = 'thirty'};
                if (n[1] == '4') { n[1] = 'forty'};
                if (n[1] == '5') { n[1] = 'fifty'};
                if (n[1] == '6') { n[1] = 'sixty'};
                if (n[1] == '7') { n[1] = 'seventy'};
                if (n[1] == '8') { n[1] = 'eighty'};
                if (n[1] == '9') { n[1] = 'ninety'};
            
                if (n[2] == '0') { n[2] = ''};
               if (n[2] == '1') { n[2] = 'one'};
               if (n[2] == '2') { n[2] = 'two'};
               if (n[2] == '3') { n[2] = 'three'};
               if (n[2] == '4') { n[2] = 'four'};
               if (n[2] == '5') { n[2] = 'five'};
               if (n[2] == '6') { n[2] = 'six'};
               if (n[2] == '7') { n[2] = 'seven'};
               if (n[2] == '8') { n[2] = 'eight'};
               if (n[2] == '9') { n[2] = 'nine'};
            
            
               function check(x) {
                   x = n[2];
               if (x == '0') { x = ''};
               if (x == '1') { x = 'one'};
               if (x == '2') { x = 'two'};
               if (x == '3') { x = 'three'};
               if (x == '4') { x = 'four'};
               if (x == '5') { x = 'five'};
               if (x == '6') { x = 'six'};
               if (x == '7') { x = 'seven'};
               if (x == '8') { x = 'eight'};
               if (x == '9') { x = 'nine'};
               return x
            }

               let a = n.join(' ');
               
               return a.trim();
               }
             }
