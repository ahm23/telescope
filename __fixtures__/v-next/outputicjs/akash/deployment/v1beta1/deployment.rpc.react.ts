import { MsgCloseGroup, MsgPauseGroup, MsgStartGroup } from "./group";
import { buildUseMutation } from "../../../react-query";
import { MsgCreateDeployment, MsgDepositDeployment, MsgUpdateDeployment, MsgCloseDeployment } from "./deployment";
import { createDeployment, depositDeployment, updateDeployment, closeDeployment, closeGroup, pauseGroup, startGroup } from "./deployment.rpc.func";
/* CreateDeployment defines a method to create new deployment given proper inputs. */
export const useCreateDeployment = buildUseMutation<MsgCreateDeployment, Error>({
  builderMutationFn: createDeployment
});
/* DepositDeployment deposits more funds into the deployment account */
export const useDepositDeployment = buildUseMutation<MsgDepositDeployment, Error>({
  builderMutationFn: depositDeployment
});
/* UpdateDeployment defines a method to update a deployment given proper inputs. */
export const useUpdateDeployment = buildUseMutation<MsgUpdateDeployment, Error>({
  builderMutationFn: updateDeployment
});
/* CloseDeployment defines a method to close a deployment given proper inputs. */
export const useCloseDeployment = buildUseMutation<MsgCloseDeployment, Error>({
  builderMutationFn: closeDeployment
});
/* CloseGroup defines a method to close a group of a deployment given proper inputs. */
export const useCloseGroup = buildUseMutation<MsgCloseGroup, Error>({
  builderMutationFn: closeGroup
});
/* PauseGroup defines a method to close a group of a deployment given proper inputs. */
export const usePauseGroup = buildUseMutation<MsgPauseGroup, Error>({
  builderMutationFn: pauseGroup
});
/* StartGroup defines a method to close a group of a deployment given proper inputs. */
export const useStartGroup = buildUseMutation<MsgStartGroup, Error>({
  builderMutationFn: startGroup
});