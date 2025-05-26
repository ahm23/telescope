import { buildTx } from "../../../../helper-func-types";
import { MsgChannelOpenInit, MsgChannelOpenTry, MsgChannelOpenAck, MsgChannelOpenConfirm, MsgChannelCloseInit, MsgChannelCloseConfirm, MsgRecvPacket, MsgTimeout, MsgTimeoutOnClose, MsgAcknowledgement } from "./tx";
/* ChannelOpenInit defines a rpc handler method for MsgChannelOpenInit. */
export const channelOpenInit = buildTx<MsgChannelOpenInit>({
  msg: MsgChannelOpenInit
});
/* ChannelOpenTry defines a rpc handler method for MsgChannelOpenTry. */
export const channelOpenTry = buildTx<MsgChannelOpenTry>({
  msg: MsgChannelOpenTry
});
/* ChannelOpenAck defines a rpc handler method for MsgChannelOpenAck. */
export const channelOpenAck = buildTx<MsgChannelOpenAck>({
  msg: MsgChannelOpenAck
});
/* ChannelOpenConfirm defines a rpc handler method for MsgChannelOpenConfirm. */
export const channelOpenConfirm = buildTx<MsgChannelOpenConfirm>({
  msg: MsgChannelOpenConfirm
});
/* ChannelCloseInit defines a rpc handler method for MsgChannelCloseInit. */
export const channelCloseInit = buildTx<MsgChannelCloseInit>({
  msg: MsgChannelCloseInit
});
/* ChannelCloseConfirm defines a rpc handler method for
 MsgChannelCloseConfirm. */
export const channelCloseConfirm = buildTx<MsgChannelCloseConfirm>({
  msg: MsgChannelCloseConfirm
});
/* RecvPacket defines a rpc handler method for MsgRecvPacket. */
export const recvPacket = buildTx<MsgRecvPacket>({
  msg: MsgRecvPacket
});
/* Timeout defines a rpc handler method for MsgTimeout. */
export const timeout = buildTx<MsgTimeout>({
  msg: MsgTimeout
});
/* TimeoutOnClose defines a rpc handler method for MsgTimeoutOnClose. */
export const timeoutOnClose = buildTx<MsgTimeoutOnClose>({
  msg: MsgTimeoutOnClose
});
/* Acknowledgement defines a rpc handler method for MsgAcknowledgement. */
export const acknowledgement = buildTx<MsgAcknowledgement>({
  msg: MsgAcknowledgement
});