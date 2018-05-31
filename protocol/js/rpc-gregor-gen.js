// @flow
/* eslint-disable */

// This file is auto-generated by client/protocol/Makefile.
// Not enabled: calls need to be turned on in enabled-calls.json

import engine, {EngineChannel} from '../../engine'
import engineSaga from '../../engine/saga'
import * as Saga from '../../util/saga'
import type {Action} from '../../constants/types/flux'
import type {Boolean, Bool, Bytes, Double, Int, Int64, Long, String, Uint, Uint64, WaitingHandlerType, RPCErrorHandler, CommonResponseHandler, RPCError} from '../../engine/types'
import type {TypedState} from '../../constants/reducer'

export type AuthAuthenticateSessionTokenRpcParam = $ReadOnly<{session: SessionToken}>

export type AuthInternalCreateGregorSuperUserSessionTokenRpcParam = void

export type AuthResult = $ReadOnly<{uid: UID, username: String, sid: SessionID, isAdmin: Boolean}>

export type AuthUpdateRevokeSessionIDsRpcParam = $ReadOnly<{sessionIDs?: ?Array<SessionID>}>

export type Body = Bytes

export type Category = String

export type ConnectedDevice = $ReadOnly<{deviceID: DeviceID, deviceType: String, devicePlatform: String, userAgent: String}>

export type ConnectedUser = $ReadOnly<{uid: UID, devices?: ?Array<ConnectedDevice>}>

export type DeviceID = Bytes

export type Dismissal = $ReadOnly<{msgIDs?: ?Array<MsgID>, ranges?: ?Array<MsgRange>}>

export type DurationMsec = Int64

export type DurationSec = Int64

export type InBandMessage = $ReadOnly<{stateUpdate?: ?StateUpdateMessage, stateSync?: ?StateSyncMessage}>

export type IncomingConsumeMessageMultiRpcParam = $ReadOnly<{msg: Message, uids?: ?Array<UID>}>

export type IncomingConsumeMessageRpcParam = $ReadOnly<{m: Message}>

export type IncomingConsumePublishMessageRpcParam = $ReadOnly<{m: Message}>

export type IncomingDescribeConnectedUsersInternalRpcParam = $ReadOnly<{uids?: ?Array<UID>}>

export type IncomingDescribeConnectedUsersRpcParam = $ReadOnly<{uids?: ?Array<UID>}>

export type IncomingPingRpcParam = void

export type IncomingStateByCategoryPrefixRpcParam = $ReadOnly<{uid: UID, deviceid: DeviceID, timeOrOffset: TimeOrOffset, categoryPrefix: Category}>

export type IncomingStateRpcParam = $ReadOnly<{uid: UID, deviceid: DeviceID, timeOrOffset: TimeOrOffset}>

export type IncomingSyncRpcParam = $ReadOnly<{uid: UID, deviceid: DeviceID, ctime: Time}>

export type IncomingVersionRpcParam = $ReadOnly<{uid: UID}>

export type Item = $ReadOnly<{category: Category, dtime: TimeOrOffset, remindTimes?: ?Array<TimeOrOffset>, body: Body}>

export type ItemAndMetadata = $ReadOnly<{md?: ?Metadata, item?: ?Item}>

export type Message = $ReadOnly<{oobm?: ?OutOfBandMessage, ibm?: ?InBandMessage}>

export type Metadata = $ReadOnly<{uid: UID, msgID: MsgID, ctime: Time, deviceID: DeviceID, inBandMsgType: Int}>

export type MsgID = Bytes

export type MsgRange = $ReadOnly<{endTime: TimeOrOffset, category: Category}>

export type OutOfBandMessage = $ReadOnly<{uid: UID, system: System, body: Body}>

export type OutgoingBroadcastMessageRpcParam = $ReadOnly<{m: Message}>

export type RemindDeleteRemindersRpcParam = $ReadOnly<{reminderIDs?: ?Array<ReminderID>}>

export type RemindGetRemindersRpcParam = $ReadOnly<{maxReminders: Int}>

export type Reminder = $ReadOnly<{item: ItemAndMetadata, seqno: Int, remindTime: Time}>

export type ReminderID = $ReadOnly<{uid: UID, msgID: MsgID, seqno: Int}>

export type ReminderSet = $ReadOnly<{reminders?: ?Array<Reminder>, moreRemindersReady: Boolean}>

export type SessionID = String

export type SessionToken = String

export type State = $ReadOnly<{items?: ?Array<ItemAndMetadata>}>

export type StateSyncMessage = $ReadOnly<{md: Metadata}>

export type StateUpdateMessage = $ReadOnly<{md: Metadata, creation?: ?Item, dismissal?: ?Dismissal}>

export type SyncResult = $ReadOnly<{msgs?: ?Array<InBandMessage>, hash: Bytes}>

export type System = String

export type Time = Long

export type TimeOrOffset = $ReadOnly<{time: Time, offset: DurationMsec}>

export type UID = Bytes
type AuthAuthenticateSessionTokenResult = AuthResult
type AuthInternalCreateGregorSuperUserSessionTokenResult = SessionToken
type IncomingDescribeConnectedUsersInternalResult = ?Array<ConnectedUser>
type IncomingDescribeConnectedUsersResult = ?Array<ConnectedUser>
type IncomingPingResult = String
type IncomingStateByCategoryPrefixResult = State
type IncomingStateResult = State
type IncomingSyncResult = SyncResult
type IncomingVersionResult = String
type RemindGetRemindersResult = ReminderSet

export type IncomingCallMapType = {||}

// Not enabled calls. To enable add to enabled-calls.json: 'gregor.1.auth.authenticateSessionToken' 'gregor.1.authInternal.createGregorSuperUserSessionToken' 'gregor.1.authUpdate.revokeSessionIDs' 'gregor.1.incoming.sync' 'gregor.1.incoming.consumeMessage' 'gregor.1.incoming.consumePublishMessage' 'gregor.1.incoming.consumeMessageMulti' 'gregor.1.incoming.ping' 'gregor.1.incoming.version' 'gregor.1.incoming.state' 'gregor.1.incoming.stateByCategoryPrefix' 'gregor.1.incoming.describeConnectedUsers' 'gregor.1.incoming.describeConnectedUsersInternal' 'gregor.1.outgoing.broadcastMessage' 'gregor.1.remind.getReminders' 'gregor.1.remind.deleteReminders'
