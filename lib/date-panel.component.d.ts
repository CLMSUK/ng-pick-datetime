import { OnInit, EventEmitter } from '@angular/core';
import * as moment from 'moment/moment';
import { Moment } from 'moment/moment';
import { DialogType } from './dialog.component';
import { PickerService } from './picker.service';
export declare class DatePanelComponent implements OnInit {
    private service;
    selectedMoment: Moment;
    onCancelDialog: EventEmitter<boolean>;
    onConfirm: EventEmitter<boolean>;
    onSelected: EventEmitter<moment.Moment>;
    theme: string;
    dialogType: DialogType;
    now: Moment;
    moment: Moment;
    calendarDays: Moment[];
    dayNames: string[];
    monthList: string[];
    yearList: number[];
    mode: 'popup' | 'dropdown' | 'inline';
    private minDate;
    private maxDate;
    private locale;
    constructor(service: PickerService);
    ngOnInit(): void;
    prevMonth(): void;
    nextMonth(): void;
    selectMonth(month: string): void;
    selectYear(year: number): void;
    toggleDialogType(type: DialogType): void;
    generateYearList(param?: string): void;
    select(moment: Moment): void;
    selectToday(): void;
    cancelDialog(): void;
    confirm(): void;
    private generateCalendar();
}
