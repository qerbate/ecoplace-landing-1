import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { Component, ViewChild } from '@angular/core';
import { loadCldr, L10n } from '@syncfusion/ej2-base';
import { EventSettingsModel, ScheduleComponent, DayService, WeekService, WorkWeekService, MonthService } from '@syncfusion/ej2-angular-schedule';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import * as  numberingSystems from 'cldr-data/supplemental/numberingSystems.json';
import * as  gregorian from 'cldr-data/main/pt/ca-gregorian.json';
import * as  numbers from 'cldr-data/main/pt/numbers.json';
import * as  timeZoneNames from 'cldr-data/main/pt/timeZoneNames.json';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';




loadCldr(numberingSystems['default'], gregorian['default'], numbers['default'], timeZoneNames['default']);
L10n.load({
  'pt': {
    'schedule': {
      'day': 'dia',
      'week': 'semana',
      'workWeek': 'Semana de trabalho',
      'month': 'Mês',
      'agenda': 'Agenda',
      'weekAgenda': 'Agenda de da semana',
      'workWeekAgenda': 'Agenda da Semana de Trabalho',
      'monthAgenda': 'Agenda do mês',
      'today': 'Hoje',
      'noEvents': 'Sem eventos',
      'allDay': 'Todo o dia',
      'start': 'Início',
      'end': 'Fim',
      'more': 'Mais',
      'close': 'Fechar',
      'cancel': 'Cancelar',
      'noTitle': '(Sem título)',
      'delete': 'Apagar',
      'deleteEvent': 'Excluir evento',
      'selectedItems': 'Ítens selecionados',
      'deleteSeries': 'Apagar série',
      'edit': 'Editar',
      'editSeries': 'Editar série',
      'editEvent': 'Editar evento',
      'createEvent': 'Criar',
      'subject': 'Assunto',
      'addTitle': 'Adicionar título',
      'moreDetails': 'Mais detalles',
      'save': 'Salvar',
      'editContent': 'Deseja editar apenas este evento ou toda a série?',
      'deleteRecurrenceContent': 'Deseja eliminar só este evento ou toda a série?',
      'deleteContent': 'Tem certeza que deseja apagar este evento?',
      'newEvent': 'Novo evento',
      'title': 'Título',
      'location': 'Localização',
      'description': 'Descrição',
      'timezone': 'Time Zone',
      'startTimezone': 'Hora inicial',
      'endTimezone': 'Hora final',
      'repeat': 'Repetir',
      'saveButton': 'Salvar',
      'cancelButton': 'Cancelar',
      'deleteButton': 'Apagar',
      'recurrence': 'Recorrência',
      'editRecurrence': 'Editar recorrência',
      'repeats': 'Repete',
      'alert': 'Alerta',
      'startEndError': 'A data de finalização selecionada ocorre antes da da de início.',
      'invalidDateError': 'O valor da data é invalida.',
      'ok': 'Confirmar',
      'occurrence': 'Výskyt',
      'series': 'Série',
      'previous': 'Anterior',
      'next': 'Próximo',
      'timelineDay': 'Alocação de Hoje',
      'timelineWeek': 'Alocação Semanal',
      'timelineWorkWeek': 'Alocação do trabalho semanal',
      'timelineMonth': 'Alocação mensal'
    },
    'recurrenceeditor': {
      'none': 'Nenhum',
      'daily': 'Diário',
      'weekly': 'Semanal',
      'monthly': 'Mensal',
      'month': 'Mês',
      'yearly': 'Anual',
      'never': 'Nunca',
      'until': 'Até',
      'count': 'Contar',
      'first': 'Primeiro',
      'second': 'Segundo',
      'third': 'Tercero',
      'fourth': 'Quarto',
      'last': 'Último',
      'repeat': 'Repetir',
      'repeatEvery': 'Repita cada',
      'on': 'Repita en',
      'end': 'Fim',
      'onDay': 'Dia',
      'days': 'Dias)',
      'weeks': 'Semanas)',
      'months': 'Meses)',
      'years': 'Anos)',
      'every': 'cada',
      'summaryTimes': 'vecês)',
      'summaryOn': 'em',
      'summaryUntil': 'até',
      'summaryRepeat': 'Repita',
      'summaryDay': 'dias)',
      'summaryWeek': 'semanas)',
      'summaryMonth': 'meses)',
      'summaryYear': 'anos)',
      'monthWeek': 'Měsíční týden',
      'monthPosition': 'Pozice měsíce',
      'monthExpander': 'Expander měsíce',
      'yearExpander': 'Rok Expander',
      'repeatInterval': 'Interval opakování'
    },
    'calendar': {
      'today': 'Hoje'
    }
  }
});

@Component({
  selector: 'app-contact-schedule',
  providers: [DayService, WeekService, WorkWeekService, MonthService],
  // specifies the template string for the Schedule component
  template: `

<mat-toolbar>
<a mat-raised-button color="accent" [routerLink]="['/Header']">
    <mat-icon>home</mat-icon>
</a>
  <span> ECOPLACE | AGENDA </span>
  <span class="example-spacer"></span>
  <button mat-icon-button class="example-icon favorite-icon" aria-label="Example icon-button with heart icon">
    <mat-icon>favorite</mat-icon>
  </button>
  <button mat-icon-button class="example-icon" aria-label="Example icon-button with share icon">
    <mat-icon>share</mat-icon>
  </button>
  <a mat-flat-button color="primary" [routerLink]="['/add-contact']"><mat-icon>add</mat-icon> Cadastro</a>
  <br>
  <a>
    |
  </a>
  <br>
    <a mat-flat-button color="accent" [routerLink]="['/contact-stat']"><mat-icon>bar_chart</mat-icon> Estatistica</a>
  
  </mat-toolbar>
  
  <ejs-schedule #scheduleObj locale="pt" width='100%' height='550px' [selectedDate]="selectedDate" [eventSettings]="eventSettings" > <e-views> <e-view option="Week"></e-view> <e-view option="WorkWeek"></e-view> <e-view option="Month"></e-view> <e-view option="Day"></e-view> </e-views> </ejs-schedule>`
})
export class ContactScheduleComponent  {

  private dataManager: DataManager = new DataManager({
    url: 'http://localhost:5000/GetData',
    crudUrl: 'http://localhost:5000/BatchData',
    adaptor: new UrlAdaptor, 
    crossDomain: true
  });
  @ViewChild('scheduleObj', { static: true })
  public scheduleObj: ScheduleComponent;
  @ViewChild('deleteButtonObj', { static: true })
  public deleteButtonObj: ButtonComponent;
  public data: object[] = [{
    Id: 4,
    Subject: 'Vacation',
    StartTime: new Date(2020, 1, 13, 9, 0),
    EndTime: new Date(2020, 1, 13, 10, 0),
    IsAllDay: false
  }];
  public selectedDate: Date = new Date(2020, 1, 15);
  public eventSettings: EventSettingsModel = { dataSource: this.dataManager };
  delete(): void {
    this.scheduleObj.deleteEvent(4);
    this.deleteButtonObj.element.setAttribute('disabled', 'true');
  }
}
 

