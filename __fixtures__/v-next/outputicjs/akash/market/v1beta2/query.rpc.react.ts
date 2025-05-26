import { buildUseQuery } from "../../../react-query";
import { QueryOrdersRequest, QueryOrdersResponse, QueryOrderRequest, QueryOrderResponse, QueryBidsRequest, QueryBidsResponse, QueryBidRequest, QueryBidResponse, QueryLeasesRequest, QueryLeasesResponse, QueryLeaseRequest, QueryLeaseResponse } from "./query";
import { getOrders, getOrder, getBids, getBid, getLeases, getLease } from "./query.rpc.func";
/* Orders queries orders with filters */
export const useGetOrders = buildUseQuery<QueryOrdersRequest, QueryOrdersResponse>({
  builderQueryFn: getOrders,
  queryKeyPrefix: "OrdersQuery"
});
/* Order queries order details */
export const useGetOrder = buildUseQuery<QueryOrderRequest, QueryOrderResponse>({
  builderQueryFn: getOrder,
  queryKeyPrefix: "OrderQuery"
});
/* Bids queries bids with filters */
export const useGetBids = buildUseQuery<QueryBidsRequest, QueryBidsResponse>({
  builderQueryFn: getBids,
  queryKeyPrefix: "BidsQuery"
});
/* Bid queries bid details */
export const useGetBid = buildUseQuery<QueryBidRequest, QueryBidResponse>({
  builderQueryFn: getBid,
  queryKeyPrefix: "BidQuery"
});
/* Leases queries leases with filters */
export const useGetLeases = buildUseQuery<QueryLeasesRequest, QueryLeasesResponse>({
  builderQueryFn: getLeases,
  queryKeyPrefix: "LeasesQuery"
});
/* Lease queries lease details */
export const useGetLease = buildUseQuery<QueryLeaseRequest, QueryLeaseResponse>({
  builderQueryFn: getLease,
  queryKeyPrefix: "LeaseQuery"
});