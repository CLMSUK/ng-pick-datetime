import { DialogType } from './dialog.component';
import { Moment } from 'moment/moment';
import { Observable, Subject } from 'rxjs/Rx';
export declare class PickerService {
    eventSource: Subject<Moment>;
    events: Observable<Moment>;
    private _dtLocale;
    readonly dtLocale: string;
    private _dtMinDate;
    readonly dtMinDate: string;
    private _dtMAxDate;
    readonly dtMaxDate: string;
    private _dtViewFormat;
    readonly dtViewFormat: string;
    private _dtReturnObject;
    readonly dtReturnObject: string;
    private _dtDialogType;
    readonly dtDialogType: DialogType;
    private _dtPickerType;
    dtPickerType: 'both' | 'date' | 'time';
    private _dtPositionOffset;
    readonly dtPositionOffset: string;
    private _dtMode;
    readonly dtMode: 'popup' | 'dropdown' | 'inline';
    private _dtHourTime;
    readonly dtHourTime: '12' | '24';
    private _dtTheme;
    readonly dtTheme: string;
    private _moment;
    readonly moment: Moment;
    private _selectedMoment;
    selectedMoment: Moment;
    constructor();
    setPickerOptions(dtLocale: string, dtViewFormat: string, dtReturnObject: string, dtPositionOffset: string, dtMode: 'popup' | 'dropdown' | 'inline', dtHourTime: '12' | '24', dtTheme: string, dtPickerType: 'both' | 'date' | 'time', dtMinDate: string, dtMaxDate: string): void;
    setMoment(value: any): void;
    setDate(moment: Moment): void;
    setTime(hour: number, minute: number, meridian: string): void;
    parseToReturnObjectType(selectedMoment: Moment): any;
}
