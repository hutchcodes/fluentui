import { buttonClassName } from '@fluentui/react-northstar';
import { ScreenerTestsConfig } from '@uifabric/build/screener';

const config: ScreenerTestsConfig = {
  steps: [builder => builder.click(`.${buttonClassName}`).snapshot('RTL: Shows menuButton')],
};

export default config;
