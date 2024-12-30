package com.rays.service;

import java.util.List;

import com.rays.common.BaseServiceInt;
import com.rays.common.UserContext;
import com.rays.dto.PaymentDTO;


public interface PaymentServiceInt extends BaseServiceInt<PaymentDTO> {

	 
		public long add(PaymentDTO dto);

		public void update(PaymentDTO dto );
		
		public List search(PaymentDTO dto);



}
