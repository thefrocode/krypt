import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'shortenAddress'})
export class ShortenAddressPipe implements PipeTransform {
  transform(value: string): string {
    return value.slice(0,5)+"..."+value.slice(value.length-4); 
  }
}