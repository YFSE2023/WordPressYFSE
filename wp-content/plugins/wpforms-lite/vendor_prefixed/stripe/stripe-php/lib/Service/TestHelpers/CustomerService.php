<?php

// File generated from our OpenAPI spec
namespace WPForms\Vendor\Stripe\Service\TestHelpers;

class CustomerService extends \WPForms\Vendor\Stripe\Service\AbstractService
{
    /**
     * Create an incoming testmode bank transfer.
     *
     * @param string $id
     * @param null|array $params
     * @param null|array|\Stripe\Util\RequestOptions $opts
     *
     * @throws \Stripe\Exception\ApiErrorException if the request fails
     *
     * @return \Stripe\CustomerCashBalanceTransaction
     */
    public function fundCashBalance($id, $params = null, $opts = null)
    {
        return $this->request('post', $this->buildPath('/v1/test_helpers/customers/%s/fund_cash_balance', $id), $params, $opts);
    }
}
