import moment from 'moment';

export default function getDate() {
  moment.locale();
  return moment().format('DD.MM.YYYY HH:mm');
}
