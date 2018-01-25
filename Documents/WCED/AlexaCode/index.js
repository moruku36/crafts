/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';

const Alexa = require('alexa-sdk');

// 占い結果の定義
/*const fortunes = [
    {'score':'good','description':'星みっつで良いでしょう' },
    {'score':'normal', 'description':'星ふたつで普通でしょう' },
    {'score':'bad','description':'星ひとつでイマイチでしょう' }
];
*/
// Lambda関数のメイン処理
exports.handler = function(event, context, callback) {
  var alexa = Alexa.handler(event, context); // Alexa SDKのインスタンス生成
  //alexa.appId = process.env.APP_ID;
  alexa.registerHandlers(handlers); // ハンドラの登録
  alexa.execute(); // インスタンスの実行
};

var handlers = {
  // インテントに紐付かないリクエスト
  'LaunchRequest': function() {
    this.emit('AMAZON.HelpIntent'); // AMAZON.HelpIntentの呼び出し
  },
  // スキルの使い方を尋ねるインテント
  'AMAZON.HelpIntent': function() {
    this.emit(':tell', '必要になるものを伝えます、' +
      'どこどこにいってきます、と話しかけてください');
  },
  // 対話モデルで定義した、占いを実行するインテント
  'HoroscopeIntent': function() {
    var sign = this.event.request.intent.slots.Misplacement.value; // スロットMisplacementを参照
    /*   var fortune = fortunes[Math.floor(Math.random()*3)];   */ // ランダムに占い結果を取得
    var message = sign;
    switch (message) {
      case sign[1]:
        message = sign + 'には、定期・鍵・水・筆箱' +'が必要です';
        break;
      case sign[2]:
        message = 'には、1・2・3・4' +'が必要です';
        break;
      case sign[3]:
        message = 'には、5・6・7・8' +'が必要です';
        break;
      case sign[4]:
        message = 'には、9・10・11・12' +'が必要です';
        break;
      case sign[5]:
        message = 'には、13・14・15・16' +'が必要です';
        break;
    }
    //
    // 応答メッセージ文字列の作成
    this.emit(':tell', message); // レスポンスの生成
    console.log(message);
  }
};
