import garagePageBuilder from '../garage/garage-view-builder';
import winnersPageBuilder from '../winners/winners-view-builder';
import createSwitchPagesButtons from '../utilites/switch-pages-buttons';
import elementCreater from '../utilites/overall-functions';
import createAppHeader from './application-header';
import createAppFooter from './application-footer';

const applicationPageBuilder = async () => {
  const header = createAppHeader();
  const footer = createAppFooter();

  const garagePage = await garagePageBuilder();
  const winnersPage = await winnersPageBuilder();
  winnersPage.classList.add('hidden');

  const toWinnersButton = createSwitchPagesButtons(
    'to-winners-button',
    'To winners',
    garagePage,
    winnersPage
  );
  const toGarageButton = createSwitchPagesButtons(
    'to-garage-button',
    'To garage',
    winnersPage,
    garagePage
  );
  const pageButtonsWrapper = elementCreater('div', 'switch-pages-buttons');
  pageButtonsWrapper.append(toGarageButton, toWinnersButton);

  document.body.append(
    header,
    pageButtonsWrapper,
    garagePage,
    winnersPage,
    footer
  );
};

export default applicationPageBuilder;