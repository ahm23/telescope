import { buildUseMutation } from "../../../../react-query";
import { MsgChannelOpenInit, MsgChannelOpenTry, MsgChannelOpenAck, MsgChannelOpenConfirm, MsgChannelCloseInit, MsgChannelCloseConfirm, MsgRecvPacket, MsgTimeout, MsgTimeoutOnClose, MsgAcknowledgement } from "./tx";
import { channelOpenInit, channelOpenTry, channelOpenAck, channelOpenConfirm, channelCloseInit, channelCloseConfirm, recvPacket, timeout, timeoutOnClose, acknowledgement } from "./tx.rpc.func";
/* ChannelOpenInit defines a rpc handler method for MsgChannelOpenInit. */
export const useChannelOpenInit = buildUseMutation<MsgChannelOpenInit, Error>({
  builderMutationFn: channelOpenInit
});
/* ChannelOpenTry defines a rpc handler method for MsgChannelOpenTry. */
export const useChannelOpenTry = buildUseMutation<MsgChannelOpenTry, Error>({
  builderMutationFn: channelOpenTry
});
/* ChannelOpenAck defines a rpc handler method for MsgChannelOpenAck. */
export const useChannelOpenAck = buildUseMutation<MsgChannelOpenAck, Error>({
  builderMutationFn: channelOpenAck
});
/* ChannelOpenConfirm defines a rpc handler method for MsgChannelOpenConfirm. */
export const useChannelOpenConfirm = buildUseMutation<MsgChannelOpenConfirm, Error>({
  builderMutationFn: channelOpenConfirm
});
/* ChannelCloseInit defines a rpc handler method for MsgChannelCloseInit. */
export const useChannelCloseInit = buildUseMutation<MsgChannelCloseInit, Error>({
  builderMutationFn: channelCloseInit
});
/* ChannelCloseConfirm defines a rpc handler method for
 MsgChannelCloseConfirm. */
export const useChannelCloseConfirm = buildUseMutation<MsgChannelCloseConfirm, Error>({
  builderMutationFn: channelCloseConfirm
});
/* RecvPacket defines a rpc handler method for MsgRecvPacket. */
export const useRecvPacket = buildUseMutation<MsgRecvPacket, Error>({
  builderMutationFn: recvPacket
});
/* Timeout defines a rpc handler method for MsgTimeout. */
export const useTimeout = buildUseMutation<MsgTimeout, Error>({
  builderMutationFn: timeout
});
/* TimeoutOnClose defines a rpc handler method for MsgTimeoutOnClose. */
export const useTimeoutOnClose = buildUseMutation<MsgTimeoutOnClose, Error>({
  builderMutationFn: timeoutOnClose
});
/* Acknowledgement defines a rpc handler method for MsgAcknowledgement. */
export const useAcknowledgement = buildUseMutation<MsgAcknowledgement, Error>({
  builderMutationFn: acknowledgement
});