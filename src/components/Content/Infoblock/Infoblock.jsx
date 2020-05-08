import React from 'react';
import c from './Infoblock.module.css';
import Infoperson from './Infoperson/Infoperson';
import Myposts from './Myposts/Myposts';

const Infoblock = (props) => {
    return (
        <div>
            <Infoperson />
            <Myposts massage="Запоминать группы по номерам не очень удобно. Для простых шаблонов это допустимо, но в сложных регулярных выражениях считать скобки затруднительно. Гораздо лучше – давать скобкам имена.

Это делается добавлением ?<name> непосредственно после открытия скобки.

Например, поищем дату в формате «день-месяц-год»:" massage2="Как вы можете видеть, группы располагаются в свойстве groups результата match.

Чтобы найти не только первую дату, используем флаг g.

Также нам понадобится matchAll, чтобы получить скобочные группы:"/>
        </div>
    )
}

export default Infoblock;
