package com.rays.dao;

import java.util.List;

import com.rays.common.BaseDAOInt;
import com.rays.dto.PaymentDTO;

public interface PaymentDAOInt extends BaseDAOInt<PaymentDTO> {
	
	public List search(PaymentDTO dto);
	public void update(PaymentDTO dto );
	

}
