package com.rays.form;

import javax.validation.constraints.NotEmpty;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.dto.PaymentDTO;

public class PaymentForm extends BaseForm {

	@NotEmpty(message = "please enter paymentMode ")
	public String paymentMode;
	@NotEmpty(message = "please enter paymentAmount")
	public String paymentAmount;
	@NotEmpty(message = "please enter paymentStatus")
	public String paymentStatus;

	public String getPaymentMode() {
		return paymentMode;
	}

	public void setPaymentMode(String paymentMode) {
		this.paymentMode = paymentMode;
	}

	public String getPaymentAmount() {
		return paymentAmount;
	}

	public void setPaymentAmount(String paymentAmount) {
		this.paymentAmount = paymentAmount;
	}

	public String getPaymentStatus() {
		return paymentStatus;
	}

	public void setPaymentStatus(String paymentStatus) {
		this.paymentStatus = paymentStatus;
	}

	@Override
	public BaseDTO getDto() {
		PaymentDTO dto = initDTO(new PaymentDTO());
		dto.setPaymentAmount(paymentAmount);
		dto.setPaymentMode(paymentMode);
		dto.setPaymentStatus(paymentStatus);
		return dto;

	}

}
