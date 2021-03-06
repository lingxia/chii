import * as Common from '../common/common.js';
import * as Components from '../components/components.js';
import * as SDK from '../sdk/sdk.js';

export class ChiiMainImpl extends Common.ObjectWrapper.ObjectWrapper {
  async run() {
    await SDK.Connections.initMainConnection(async () => {
      SDK.SDKModel.TargetManager.instance().createTarget(
        'main',
        Common.UIString.UIString('Main'),
        SDK.SDKModel.Type.Frame,
        null,
        undefined,
        false
      );
    }, Components.TargetDetachedDialog.TargetDetachedDialog.webSocketConnectionLost);
  }
}
