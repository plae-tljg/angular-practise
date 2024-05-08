import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ 
  name: 'paginate',
  standalone: true,
}) 
export class PaginatePipe implements PipeTransform { 
transform(items: any[], pageIndex: number, pageSize: number): any[] { 
  const startIndex = pageIndex * pageSize; 
  return items.slice(startIndex, startIndex + pageSize); 
} 
} 