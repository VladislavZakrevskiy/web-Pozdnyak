import { TelegramWebApps } from 'telegram-webapps-types';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const tgSDK: TelegramWebApps.SDK = window?.Telegram;
const tg = tgSDK.WebApp;

export function useTelegram() {
  const onClose = () => {
    tg.close();
  };

  const onToggleButton = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  };

  return {
    onClose,
    onToggleButton,
    tg,
    user: tg.initDataUnsafe?.user,
    queryId: tg.initDataUnsafe?.query_id,
  };
}
