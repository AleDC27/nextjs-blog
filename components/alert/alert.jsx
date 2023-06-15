/* 
clsxes una biblioteca simple que le permite cambiar fácilmente los nombres de las clases.
 Puedes instalarlo usando npm install clsxo yarn add clsx
*/

import styles from './alert.module.css';
import {clsx} from 'clsx';

import React from 'react'

export default function Alert({children,type}) {
  return (
    <div 
    className={clsx({
        [styles.success]:type==='success',
        [styles.error]:type==='error',
        
    })}
    >
        {children}
    </div>
  )
}
