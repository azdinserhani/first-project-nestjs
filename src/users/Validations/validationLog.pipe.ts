import { PipeTransform, Injectable } from '@nestjs/common';

@Injectable()
export class ValidationLog implements PipeTransform {
  transform(value: any) {
    console.log('this is log-0:', value);

    return value;
  }
}
